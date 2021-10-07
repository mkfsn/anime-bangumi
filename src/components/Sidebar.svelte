<script lang="ts">
    import {fade} from 'svelte/transition';
    import {onMount} from 'svelte';
    import AnimeGroups from "./AnimeGroups.svelte";
    import {Anime} from "../anime";

    let isOpened = false;

    const fadeIn = {
        delay: 100,
        duration: 200
    }

    const fadeOut = {
        delay: 0,
        duration: 100
    }

    let animeList = [];

    onMount(async () => {
        const res = await fetch(`/assets/2021/10.json`);
        for (let result of await res.json()) {
            animeList.push(new Anime(result))
        }
    });
</script>

<nav class:open={isOpened}>
    <button on:click={() => isOpened = !isOpened}>
        {#if isOpened}
            Close
        {:else}
            Open
        {/if}
    </button>

    {#if isOpened}
        <div in:fade={fadeIn} out:fade={fadeOut}>
            <AnimeGroups animeList={animeList} />
        </div>
    {/if}
</nav>

<style>
    nav {
        grid-area: nav;
        height: 100vh;
        background-color: #324754;
        color: #A2B7C4;
        transition: ease-out 200ms;
        width: 60px;
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
