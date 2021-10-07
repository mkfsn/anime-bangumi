<script lang="ts">
    import {Anime} from "../anime";

    export let anime: Anime;
</script>

<div class="card">
    <img class="cover" src="{anime.images[0].getThumbnailUrl()}" alt="cover">
    <div class="container">
        <b>{anime.name.chinese}</b>
    </div>
</div>

<style>
    .card {
        /* Add shadows to create the "card" effect */
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        transition: 0.3s;
    }

    /* On mouse-over, add a deeper shadow */
    .card:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }

    /* Add some padding inside the card container */
    .container {
        padding: 2px 16px;
    }

    .card > img {
        width: 100%;
    }
</style>
