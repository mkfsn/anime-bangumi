import type { Anime } from "../models/anime";

const version = "v1";
const sectionDelimiter = "/";
const idDelimiter = ",";
const keyValueDelimiter = "=";

function storeAnimeListToUrl(animeList: Anime[]) {
    const animeGroups = {};

    animeList.forEach(anime => {
        const yearMonth = `${anime.year}${anime.month}`;

        if (! (yearMonth in animeGroups)) {
            animeGroups[yearMonth] = [];
        }

        animeGroups[yearMonth].push(anime.id);
    });

    let newHash = `${sectionDelimiter}${version}`;

    for (let yearMonth in animeGroups) {
        const animeIDs = animeGroups[yearMonth].join(idDelimiter);
        newHash += `${sectionDelimiter}${yearMonth}${keyValueDelimiter}${animeIDs}`;
    }

    window.location.hash = newHash;
}

function loadAnimeListFromUrl(allAnimeList: Anime[], fetchYear: number, fetchMonth: number): Anime[] {
    const hash = window.location.hash.slice(1);
    if (!hash.startsWith(`${sectionDelimiter}${version}`)) {
        return [];
    }

    const groups: string[] = hash.slice(4).split(sectionDelimiter);
    let animeList: Anime[] = [];

    groups.forEach(group => {
        const [animeYearMonth, animeIDs] = group.split(keyValueDelimiter, 2)

        const animeYear = parseInt(animeYearMonth.slice(0, 4)),
              animeMonth = parseInt(animeYearMonth.slice(4));

        if (!(animeYear === fetchYear && animeMonth === fetchMonth) || animeIDs === "") {
            return;
        }

        const animeIDSet = new Set<String>(animeIDs.split(idDelimiter));
        const sharedAnimeList = allAnimeList.filter(anime => animeIDSet.has(anime.id));
        animeList = [... sharedAnimeList];
    })

    return animeList;
}

export {
    storeAnimeListToUrl,
    loadAnimeListFromUrl,
}
