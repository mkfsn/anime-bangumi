<script lang="ts">
    import { Anime } from "../anime";
    import { watchlist } from '../watchlist.js';

    export let anime: Anime;

    const addToWatchlist = () => {
        $watchlist = [... new Set([...$watchlist, anime])];
    }
</script>

<div class="wrapper">
    <img class="plus" src="https://img.icons8.com/color/24/000000/plus--v1.png" alt="icon" on:click={addToWatchlist}/>
    <div class="card">
        <div class="cover">
            <img src={anime?.images[0].getThumbnailUrl()} alt={anime?.name?.japanese} loading="lazy" />
        </div>
        <p class="title">{anime?.name?.chinese}</p>
    </div>
</div>

<style>
    .wrapper {
        position: relative;
    }

    .plus {
        position: absolute;
        right: 0;
        z-index: 999;
    }

    .plus:hover {
        cursor: pointer;
        opacity: 0.7;
    }

    .card {
        position: relative;
        display: flex;
        justify-content: space-between;
        flex: 1 1;
        width: 200px;
        align-items: center;
        gap: 5px;
    }

    .card:hover > .cover {
        opacity: .7;
    }

    .cover {
        flex: 1 1 0;
    }

    .cover > img {
        object-fit: cover;
        width: 100px;
    }

    .title {
        flex: 1 1 0;
        margin: 0;
        font-size: .9rem;
    }
</style>
