<script lang="ts">
    import Timetable from "./components/Timetable.svelte";
    import Sidebar from "./components/Sidebar.svelte";
    import TopBar from "./components/TopBar.svelte";
    import { onMount } from "svelte";
    import { Anime } from "./models/anime";
    import { watchlistStore } from './stores/watchlist';
    import { loadAnimeListFromUrl } from "./utils/url";
    const { watchlist } = watchlistStore;

    let openSideBar = false;
    let animeList = [];

    onMount(async () => {
        const fetchYear = 2021, fetchMonth = 10;

        const res = await fetch(`/assets/${fetchYear}/${fetchMonth}.json`);
        for (let result of await res.json()) {
            animeList.push(new Anime(result, fetchYear, fetchMonth));
        }

        $watchlist = loadAnimeListFromUrl(animeList, fetchYear, fetchMonth);
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
