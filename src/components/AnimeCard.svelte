<script lang="ts">
    import {Anime} from "../anime";
    import Dialog, { Header, Title, Content, Actions } from '@smui/dialog';
    import IconButton from '@smui/icon-button';
    import Button, { Label } from '@smui/button';
    import Card, {
        PrimaryAction,
        Media,
        MediaContent,
    } from '@smui/card';
    import {watchlist} from "../watchlist";

    export let anime: Anime;
    let open = false;

    function closeHandler(e: CustomEvent<{ action: string }>) {
        switch (e.detail.action) {
            case 'close':
                break;
            case 'remove':
                console.log("remove:", anime.id);
                removeFromWatchlist();
                // TODO:
                break;
        }
    }

    const removeFromWatchlist = () => {
        const animeSet = new Set([...$watchlist]);
        animeSet.delete(anime);

        $watchlist = [... animeSet];

        const animeGroups = {}
        $watchlist.forEach(anime => {
            const yearMonth = `${anime.year}${anime.month}`;
            if (! (yearMonth in animeGroups)) {
                animeGroups[yearMonth] = []
            }
            animeGroups[yearMonth].push(anime.id);
        })
        let newHash = "/v1";
        for (let yearMonth in animeGroups) {
            const animeIDs = animeGroups[yearMonth].join(",");
            newHash += `/${yearMonth}=${animeIDs}`;
        }
        window.location.hash = newHash
    }
</script>

<Dialog
    bind:open
    fullscreen
    aria-labelledby="fullscreen-title"
    aria-describedby="fullscreen-content"
    on:MDCDialog:closed={closeHandler}
>
    <Header>
        <Title id="fullscreen-title">{anime.name.chinese}</Title>
        <IconButton action="close" class="material-icons">close</IconButton>
    </Header>
    <Content id="fullscreen-content">
    </Content>
    <Actions>
        <Button action="remove">
            <Label>Remove</Label>
        </Button>
    </Actions>
</Dialog>


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
