<script lang="ts">
    import TopAppBar, {Row, Section, Title} from '@smui/top-app-bar';
    import IconButton from '@smui/icon-button';

    export let openSideBar;
    let today = new Date();

    const goToGithub = () => {
        window.open("https://github.com/mkfsn/anime-bangumi", '_blank').focus();
    }
</script>

<TopAppBar variant="static" prominent={false} color="secondary" class="top-app-bar">
    <Row>
        <Section>
            {#if openSideBar}
                <IconButton class="material-icons" on:click={() => openSideBar = !openSideBar}>menu_open</IconButton>
            {:else}
                <IconButton class="material-icons" on:click={() => openSideBar = !openSideBar}>menu</IconButton>
            {/if}
            <Title>アニメ番組</Title>
            <span class="today">
                {today.toLocaleDateString('zh-tw', {
                    year: "numeric",
                    month: "long",
                })}
            </span>
        </Section>

        <Section/>
        <Section/>
        <Section/>

        <Section align="end">
            <IconButton class="material-icons" aria-label="Github Repository" on:click={goToGithub}>source</IconButton>
        </Section>
    </Row>
</TopAppBar>

<style>
    :global(.top-app-bar) {
        grid-area: topbar;
    }

    .today {
        margin-left: auto;
    }
</style>
