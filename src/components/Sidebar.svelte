<script lang="ts">
    import { fade } from 'svelte/transition';
    import { onMount } from 'svelte';

    let isOpened = false;

    const fadeIn = {
        delay: 100,
        duration: 200
    }

    const fadeOut = {
        delay: 0,
        duration: 100
    }
</script>

<nav class:open={isOpened}>
    <button on:click={() => isOpened = !isOpened}>
        {#if isOpened}
            Close
        {:else}
            Open
        {/if}
    </button>

    <ul>
        <li>{#if isOpened}<span in:fade="{fadeIn}" out:fade="{fadeOut}">Inbox</span>{/if}</li>
        <li>{#if isOpened}<span in:fade="{fadeIn}" out:fade="{fadeOut}">Starred</span>{/if}</li>
        <li>{#if isOpened}<span in:fade="{fadeIn}" out:fade="{fadeOut}">Trashed</span>{/if}</li>
    </ul>
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

    ul {
        list-style: none;
        padding: 20px;
        margin: 0;
    }

    li {
        width: 200px;
    }

    button {
        border: none;
        background: none;
        color: #A2B7C4;
        text-transform: uppercase;
    }
</style>
