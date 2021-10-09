<script lang="ts">
    import {Anime} from "../anime";
    import Card, {
        Content,
        PrimaryAction,
        Media,
        MediaContent,
    } from '@smui/card';

    export let anime: Anime;
</script>

<div class="card-display">
    <div class="card-container">
        <Card>
            <PrimaryAction ripple={false}>
                <Media class="card-media-16x9" aspectRatio="16x9" style="background-image: url({anime.images[0].getThumbnailUrl()});">
                    <MediaContent>
                        <div style="color: #fff; position: absolute; bottom: 16px; left: 16px;">
                            <h2 class="mdc-typography--headline6" style="margin: 0;">
                                {anime.name.chinese}
                            </h2>
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

    * {
        font-size: 1rem;
    }

    .card-container :global(.on-air-spec) {
        font-size: .5rem;
        padding: .5em !important;
    }
</style>
