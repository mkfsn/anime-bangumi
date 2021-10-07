<script lang="ts">
    import Timetable from "./components/Timetable.svelte";
    import Sidebar from "./components/Sidebar.svelte";
</script>

<main>
    <Sidebar/>
    <Timetable/>
</main>

<style>
    main {
        margin: 0 auto;
        display: grid;
        grid-template-columns:
            [nav] min-content
            [timetable] auto;
    }
</style>
