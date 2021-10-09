<script lang="ts">
    import TopAppBar, { Row, Section, Title } from '@smui/top-app-bar';
    import IconButton from '@smui/icon-button';

    export let openSideBar;
</script>

<TopAppBar variant="static" prominent={false} color="secondary" class="top-app-bar">
    <Row>
        <Section>
            <IconButton class="material-icons" on:click={() => openSideBar = !openSideBar}>menu</IconButton>
            <Title>アニメ番組</Title>
        </Section>
    </Row>
</TopAppBar>

<style>
    :global(.top-app-bar) {
        grid-area: topbar;
    }
</style>
