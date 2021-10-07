<script lang="ts">
    import { watchlist } from '../watchlist.js';
    import { onDestroy } from 'svelte';
    import {Anime} from "../anime";

    let animeGroups = [
        [], [], [], [], [], [], []
    ]

    function nameOfDay(v: number): string {
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        console.assert(v >= 0 && v <= days.length);
        return days[v];
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
                <span>{nameOfDay(weekday)}</span>
            </div>
            {#each animeList as anime}
                <p>{anime.name.chinese}</p>
            {/each}
        </div>
    {/each}
</div>

<style>
    .timetable {
        grid-area: timetable;
        height: 100vh;
        display: flex;
        border-left: 1px solid #dfdfdf;
    }

    .weekday {
        flex: 1 1;
        border-right: 1px solid #dfdfdf;
    }

    .header {
        text-align: center;
        justify-self: center;
        padding-bottom: .5em;
        border-bottom: 1px solid #dfdfdf;
    }
</style>
