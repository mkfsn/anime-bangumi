<script lang="ts">
    import {Anime} from "../models/anime";
    import Card, {PrimaryAction, Media, MediaContent, Content} from '@smui/card';
    import AnimeModal from "./AnimeModal.svelte";

    export let anime: Anime;
    let open = false;
</script>

<AnimeModal {anime} {open} />

<div class="card-display">
    <div class="card-container">
        <Card>
            <PrimaryAction ripple={false} on:click={() => {open = true}}>
                <Media class="card-media-16x9" aspectRatio="16x9" style="background-image: url({anime.images[0].getThumbnailUrl()});">
                    <MediaContent class="media-content">
                        <div class="content-header">
                            <h4 class="mdc-typography--headline6" style="margin: 0;">
                                {anime.name.chinese}
                            </h4>
                        </div>
                    </MediaContent>
                </Media>
                <Content class="mdc-typography--caption on-air-spec">
                    {anime.onAir.spec}
                </Content>
            </PrimaryAction>
        </Card>
    </div>
</div>

<style>
    .card-display {
        margin: 2px;
    }

    .card-container :global(.on-air-spec) {
        font-size: .5rem;
        padding: .5em !important;
    }

    .card-container :global(.media-content) {
        background-color: rgba(0, 0, 0, .55);
    }

    .content-header {
        color: #fff;
        position: absolute;
        margin-left: 1em;
        margin-right: 1em;
        bottom: 1em;
    }
</style>
