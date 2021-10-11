<script lang="ts">
    import {Anime} from "../models/anime";
    import Dialog, { Header, Title, Content, Actions } from '@smui/dialog';
    import IconButton from '@smui/icon-button';
    import Button, { Label } from '@smui/button';
    import { watchlistStore } from "../stores/watchlist";
    import { storeAnimeListToUrl } from "../utils/url";
    const { watchlist } = watchlistStore;

    export let anime: Anime;
    export let open: boolean;

    function closeHandler(e: CustomEvent<{ action: string }>) {
        switch (e.detail.action) {
            case 'close':
                break;
            case 'remove':
                removeFromWatchlist();
                break;
        }
    }

    const removeFromWatchlist = () => {
        const animeSet = new Set([...$watchlist]);
        animeSet.delete(anime);

        $watchlist = [... animeSet];

        storeAnimeListToUrl($watchlist);
    }
</script>

<Dialog bind:open fullscreen aria-labelledby="fullscreen-title" aria-describedby="fullscreen-content" on:MDCDialog:closed={closeHandler}>
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
