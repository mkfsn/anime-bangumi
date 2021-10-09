<script lang="ts">
    import {watchlist} from '../watchlist.js';
    import {onDestroy} from 'svelte';
    import {Anime} from "../anime";
    import AnimeCard from "./AnimeCard.svelte";

    let animeGroups = [
        [], [], [], [], [], [], []
    ]

    const daysOfCurrentWeek = getDaysOfCurrentWeek(getStartDateOfWeek());

    function isToday(dayOfWeek: number): boolean {
        const today = new Date();
        return today.getDay() === dayOfWeek;
    }

    function nameOfDay(v: number): string {
        console.assert(v >= 0 && v <= daysOfCurrentWeek.length);
        return daysOfCurrentWeek[v].toLocaleString("zh-tw", {weekday: "short"})
    }

    function dayOfMonth(v: number): string {
        console.assert(v >= 0 && v <= daysOfCurrentWeek.length);
        return daysOfCurrentWeek[v].getDate().toString();
    }

    function getStartDateOfWeek(): Date {
        let result = new Date();
        const day = result.getDay()
        result.setHours(result.getHours() - day * 24)
        return result;
    }

    function getDaysOfCurrentWeek(startDateOfWeek: Date): Date[] {
        const results: Date[] = [];
        for (let i = 0; i < 7; i++) {
            const t = new Date(startDateOfWeek);
            t.setHours(t.getHours() + i * 24);
            results.push(t);
        }
        return results;
    }

    const unsubscribe = watchlist.subscribe(animeList => {
        animeGroups = [[], [], [], [], [], [], []]

        animeList.forEach((anime: Anime) => {
            const onAirTime = anime.onAir.time;
            if (onAirTime) {
                let dateStr = onAirTime.toLocaleString('ja-JP', {timeZone: 'Asia/Tokyo'});
                let onAirJST = new Date(dateStr);
                onAirJST.setHours(onAirJST.getHours() - 6); // 30-hour clock
                animeGroups[onAirJST.getDay()].push(anime);
                // TODO: sort animeGroups[onAirJST.getDay()]
            }
        })
    });

    onDestroy(() => {
        unsubscribe();
    });
</script>

<div class="timetable">
    {#each animeGroups as animeList, weekday}
        <div class="weekday">
            <div class="header">
                <div class="date" class:today={isToday(weekday)}>
                    <p>{nameOfDay(weekday)}</p>
                    <p>{dayOfMonth(weekday)}</p>
                </div>
            </div>
            {#each animeList as anime}
                <AnimeCard anime={anime}/>
            {/each}
        </div>
    {/each}
</div>

<style>
    .timetable {
        grid-area: timetable;
        height: calc(100vh - 64px);
        display: flex;
        border-left: 1px solid #dfdfdf;
    }

    .weekday {
        flex: 1 1;
        min-width: 0;
        border-right: 1px solid #dfdfdf;
    }

    .header {
        text-align: center;
        justify-self: center;
        padding-top: 3px;
        padding-bottom: 3px;
        border-bottom: 1px solid #dfdfdf;
    }

    .date > p {
        margin: 0;
    }

    .date {
        border-radius: 100%;
        width: 40px;
        padding: 5px;
        margin: 0 auto;
    }

    .date:hover {
        background-color: #eaeaea;
    }

    .date.today {
        background-color: #6292e9;
        color: #fcfcfc;
    }

    .date.today:hover {
        background-color: #3569c8;
    }
</style>
