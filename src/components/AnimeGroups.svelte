<script lang="ts">
    import {Anime} from "../anime";
    import AnimeCard from "./AnimeCard.svelte";

    export let animeList: Anime[];

    const currentYear = 2021,
        currentMonth = 10;

    const dateOfAnime = ((clockType: 24 | 30) => {
        const base = new Date(Date.UTC(currentYear, currentMonth - 1, 1, 0, 0, 0, 0));
        base.setHours(base.getHours() - 9);

        return (d: Date): string => {
            if (d === undefined) {
                return '未定'
            }

            let tmp = new Date(d);
            if (clockType === 30) {
                tmp.setHours(tmp.getHours() - 6)
            }

            if (tmp < base) {
                return '接續';
            }

            return tmp.toLocaleDateString('ja-JP', {
                timeZone: 'Asia/Tokyo',
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
                weekday: 'short',
            });
        };
    })(30);

    const sortByDateString = (a, b): number => {
        if (a === '接續') {
            return -1;
        } else if (b === '接續') {
            return 1;
        }
        return a < b ? -1 : 1;
    };

    let animeGroups = [];

    $: {
        const animeGroupsByDate = {}
        for (let anime of animeList) {
            if (!animeGroupsByDate[dateOfAnime(anime.onAir.time)]) {
                animeGroupsByDate[dateOfAnime(anime.onAir.time)] = [];
            }
            ;
            animeGroupsByDate[dateOfAnime(anime.onAir.time)].push(anime);
        }

        Object.keys(animeGroupsByDate).sort(sortByDateString).forEach((date) => {
            animeGroups.push([date, animeGroupsByDate[date]]);
        });
    }
</script>

<div class="wrapper">
    {#each animeGroups as [date, animeList]}
        <h1>{date}</h1>
        {#each animeList as anime}
            <AnimeCard anime={anime}/>
        {/each}
    {/each}
</div>

<style>
    .wrapper {
        height: calc(100vh - 17px);
        overflow-y: scroll;
    }
</style>
