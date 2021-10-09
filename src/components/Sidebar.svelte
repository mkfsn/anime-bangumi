<script lang="ts">
    import {fade} from 'svelte/transition';
    import AnimeNavbar from "./AnimeNavbar.svelte";

    export let open;

    const fadeIn = {
        delay: 100,
        duration: 200
    }

    const fadeOut = {
        delay: 0,
        duration: 100
    }

    export let animeList = [];
</script>

<nav class:open={open}>
    {#if open}
        <div in:fade={fadeIn} out:fade={fadeOut}>
            <AnimeNavbar animeList={animeList} />
        </div>
    {/if}
</nav>

<style>
    nav {
        grid-area: nav;
        height: calc(100vh - 64px);
        background-color: #324754;
        color: #A2B7C4;
        transition: ease-out 200ms;
        width: 0;
        overflow: hidden;
    }

    .open {
        transition: ease-out 200ms;
        width: 200px;
    }

    button {
        border: none;
        background: none;
        color: #A2B7C4;
        text-transform: uppercase;
    }
</style>
