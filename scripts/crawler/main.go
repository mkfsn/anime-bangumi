package main

import (
	"encoding/json"
	"flag"
	"fmt"
	"log"
	"strings"
	"time"

	"github.com/PuerkitoBio/goquery"
	"github.com/gocolly/colly/v2"
)

type EntityNames struct {
	Japanese string `json:"japanese"`
	Chinese  string `json:"chinese"`
}

type CharacterVoice struct {
	Character  string `json:"character"`
	VoiceActor string `json:"voice_actor"`
}

type Staff struct {
	Role string `json:"role"`
	Name string `json:"name"`
}

type OnAir struct {
	Spec string     `json:"spec"`
	Time *time.Time `json:"time,omitempty"`
}

type Image struct {
	Url          string  `json:"url"`
	ThumbnailUrl *string `json:"thumbnail_url,omitempty"`
}

type Anime struct {
	ID        string           `json:"id"`
	Name      EntityNames      `json:"name"`
	OnAir     OnAir            `json:"on_air"`
	Copyright string           `json:"copyright"`
	Story     string           `json:"story"`
	Castings  []CharacterVoice `json:"castings"`
	Staffs    []Staff          `json:"staffs"`
	Images    []Image          `json:"images"`
}

func defaultYear() int {
	return time.Now().Year()
}

func defaultMonth() int {
	currentMonth := int(time.Now().Month())
	return currentMonth%4 + currentMonth/4*4
}

func main() {
	var year int
	var month int
	flag.IntVar(&year, "year", defaultYear(), "year to fetch")
	flag.IntVar(&month, "month", defaultMonth(), "month to fetch. accept only 1, 4, 7, 10")
	flag.Parse()

	switch month {
	case 1, 4, 7, 10:
		break
	default:
		log.Fatalf("month should be one of 1, 4, 7, 10\n")
	}

	c := colly.NewCollector()

	animeList := make([]Anime, 0)

	c.OnHTML("div.card-like.acgs-anime", func(e *colly.HTMLElement) {
		anime, err := parseAnime(e.DOM, year, month)
		if err != nil {
			log.Fatalf("failed to parse anime: %v\n", err)
		}

		animeList = append(animeList, anime)
	})

	url := fmt.Sprintf("https://acgsecrets.hk/bangumi/%d%02d/", year, month)

	if err := c.Visit(url); err != nil {
		log.Fatalf("failed to visit: %s: %s\n", url, err)
	}

	c.Wait()

	b, err := json.MarshalIndent(animeList, "", "    ")
	if err != nil {
		log.Fatalf("failed to marshal anime list: %s\n", err)
	}

	fmt.Printf("%s\n", b)
}

func parseAnime(dom *goquery.Selection, year, month int) (Anime, error) {
	var anime Anime
	var err error

	animeID := dom.Parent().Parent().AttrOr("acgs-bangumi-anime-id", "")
	anime.ID = animeID[6:]

	anime.Name = parseAnimeName(dom.Find(".anime_info.anime_names.site-content-float"))

	anime.OnAir, err = parseAnimeOnAir(dom.Find(".anime_info.site-content-float"), year, month)
	if err != nil {
		log.Fatalf("failed to parse on air time: %v\n", err)
	}

	anime.Copyright = dom.Find(".anime_copyrightstring.anime_summary").Text()
	anime.Story = dom.Find(".anime_story").Text()
	anime.Castings = parseAnimeCastings(dom.Find(".anime_cast"))
	anime.Staffs = parseAnimeStaffs(dom.Find(".anime_staff"))
	anime.Images = parseAnimeImages(dom)

	return anime, err
}

func parseAnimeStaffs(s *goquery.Selection) []Staff {
	results := make([]Staff, 0, s.Find(".anime_person").Length())

	s.Find(".anime_person").Each(func(i int, selection *goquery.Selection) {
		results = append(results, Staff{
			Role: selection.Find(".type").Text(),
			Name: selection.Find(".entities").Text(),
		})
	})

	return results
}

func parseAnimeCastings(s *goquery.Selection) []CharacterVoice {
	results := make([]CharacterVoice, 0, s.Find(".anime_person").Length())

	s.Find(".anime_person").Each(func(i int, selection *goquery.Selection) {
		results = append(results, CharacterVoice{
			Character:  selection.Find(".type").Text(),
			VoiceActor: selection.Find(".entities").Text(),
		})
	})

	return results
}

func parseAnimeName(s *goquery.Selection) EntityNames {
	return EntityNames{
		Japanese: s.Find(".notranslate.entity_original_name").Text(),
		Chinese:  s.Find(".entity_localized_name").Text(),
	}
}

func parseAnimeImages(s *goquery.Selection) []Image {
	var results []Image

	results = append(results, Image{
		Url:          s.Find(".anime_cover_image > img.img-fit-cover").AttrOr("acgs-img-data-url", ""),
		ThumbnailUrl: nil,
	})

	s.Find(".entity_cover_choose .entity_cover_options").Each(func(i int, selection *goquery.Selection) {
		results = append(results, Image{
			Url: selection.AttrOr("acgs-img-data-url", ""),
			ThumbnailUrl: func() *string {
				s := selection.Find(".img-fit-cover").AttrOr("src", "")
				return &s
			}(),
		})
	})

	return results
}

func parseAnimeOnAir(s *goquery.Selection, year, month int) (OnAir, error) {
	onAirSpec := s.Find(".anime_onair.time_tomorrow").Text()

	parts := strings.Split(onAirSpec, "／")

	var onAirTime time.Time
	var err error

	timezone := time.FixedZone("Asia/Tokyo", 9*60*60)

	switch {
	case len(parts) == 2:
		layout := "2006/1/2/15時4分"
		onAirTime, err = time.ParseInLocation(layout, fmt.Sprintf("%d/%d/1/%s", year, month, parts[1]), timezone)
	case len(parts) == 3:
		layout := "2006/播放日期：1月2日起/15時4分"
		onAirTime, err = time.ParseInLocation(layout, fmt.Sprintf("%d/%s/%s", year, parts[0], parts[2]), timezone)
	case onAirSpec == "時間未定":
		return OnAir{Spec: onAirSpec}, nil
	default:
		return OnAir{}, fmt.Errorf("failed to parse onAirSpec: %s: unexpected pattern", onAirSpec)
	}

	if err != nil {
		return OnAir{}, fmt.Errorf("failed to parse onAirSpec: %s: %v", onAirSpec, err)
	}

	return OnAir{
		Spec: onAirSpec,
		Time: &onAirTime,
	}, nil
}
