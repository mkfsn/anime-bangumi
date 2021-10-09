<script lang="ts">
    import Timetable from "./components/Timetable.svelte";
    import Sidebar from "./components/Sidebar.svelte";
    import TopBar from "./components/TopBar.svelte";

    let openSideBar = false;
</script>

<main>
    <TopBar bind:openSideBar={openSideBar}/>
    <Sidebar open={openSideBar}/>
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
