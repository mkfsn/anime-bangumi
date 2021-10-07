<script lang="ts">
    import {Anime} from "../anime";
    import AnimeNavbarItem from "./AnimeNavbarItem.svelte";

    export let animeList: Anime[];

    const currentYear = 2021,
        currentMonth = 10;

    const dateOfAnime = ((clockType: 24 | 30) => {
        return (d: Date): string => {
            if (d === undefined) {
                return '未定'
            }

            let tmp = new Date(d);
            if (clockType === 30) {
                tmp.setHours(tmp.getHours() - 6)
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

        Object.keys(animeGroupsByDate).sort().forEach((date) => {
            animeGroups.push([date, animeGroupsByDate[date]]);
        });
    }
</script>

<div class="wrapper">
    {#each animeGroups as [date, animeList]}
        <h1>{date}</h1>
        {#each animeList as anime}
            <AnimeNavbarItem anime={anime}/>
        {/each}
    {/each}
</div>

<style>
    .wrapper {
        height: calc(100vh - 17px);
        overflow-y: scroll;
        -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none; /* Firefox */
    }

    .wrapper::-webkit-scrollbar {
        display: none;
    }
</style>
