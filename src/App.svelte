<script lang="ts">
    import Timetable from "./components/Timetable.svelte";
    import Sidebar from "./components/Sidebar.svelte";
    import TopBar from "./components/TopBar.svelte";
    import {onMount} from "svelte";
    import {Anime} from "./models/anime";
    import { watchlist } from './stores/watchlist';

    const fetchYear = 2021, fetchMonth = 10;

    let openSideBar = false;

    let animeList = [];

    onMount(async () => {

        const res = await fetch(`/assets/${fetchYear}/${fetchMonth}.json`);
        for (let result of await res.json()) {
            animeList.push(new Anime(result, fetchYear, fetchMonth))
        }

        const hash = window.location.hash.slice(1);
        if (hash.startsWith("/v1")) {
            const groups = hash.slice(4).split("/");
            groups.forEach(group => {
                const [yearMonth, animeIDs] = group.split("=", 2)

                const year = parseInt(yearMonth.slice(0, 4)),
                      month = parseInt(yearMonth.slice(4));

                if (!(year === fetchYear && month === fetchMonth)) {
                    return;
                }

                if (animeIDs === "") {
                    return;
                }

                const animeIDSet = new Set<String>(animeIDs.split(","))
                const sharedAnimeList = animeList.filter(anime => animeIDSet.has(anime.id));
                $watchlist = [... sharedAnimeList];
            })
        }
    });
</script>

<main>
    <TopBar bind:openSideBar={openSideBar}/>
    <Sidebar open={openSideBar} animeList={animeList} />
    <Timetable/>
</main>

<style>
    main {
        margin: 0 auto;
        display: grid;
        grid-template-rows: min-content 1fr;
        grid-template-columns: min-content 1fr;
        grid-template-areas:
            "topbar topbar"
            "nav    timetable";
    }
</style>
