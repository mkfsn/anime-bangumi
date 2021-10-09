<script lang="ts">
    import { Anime } from "../anime";
    import { watchlist } from '../watchlist.js';
    import Card, {
        Media,
        MediaContent,
    } from '@smui/card';

    export let anime: Anime;

    const addToWatchlist = () => {
        $watchlist = [... new Set([...$watchlist, anime])];
    }
</script>

<div class="wrapper">
    <div class="card-container">
        <img class="plus" src="https://img.icons8.com/color/24/000000/plus--v1.png" alt="icon" on:click={addToWatchlist}/>
        <Card>
            <Media class="card-media-16x9" aspectRatio="16x9" style="background-image: url({anime.images[0].getThumbnailUrl()});">
                <MediaContent class="media-content">
                    <h5 class="mdc-typography--headline6">
                        {anime.name.chinese}
                    </h5>
                </MediaContent>
            </Media>
        </Card>
    </div>
</div>

<style>
    .wrapper {
        position: relative;
    }

    .card-container {
        margin-left: 8px;
        margin-right: 8px;
        margin-bottom: 10px;
    }

    .plus {
        position: absolute;
        right: -2px;
        top: -10px;
        z-index: 999;
    }

    .plus:hover {
        cursor: pointer;
        opacity: 0.7;
    }

    :global(.mdc-typography--headline6) {
        color: #fff;
        position: absolute;
        bottom: 8px;
        left: 8px;
        margin: 0;
    }

    :global(.media-content) {
        background-color: rgba(0, 0, 0, 0.55);
    }
</style>
