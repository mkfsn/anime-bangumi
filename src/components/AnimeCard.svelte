<script lang="ts">
    import { Anime } from "../anime";

    export let anime: Anime;
    let isHover = false;

</script>

<div class="card"
     on:mouseenter={() => isHover = true}
     on:mouseleave={() => isHover = false}
     class:hover={isHover}
>
    <div class="cover">
        <img src={anime?.images[0].getThumbnailUrl()} alt={anime?.name?.japanese} loading="lazy" />
    </div>
    <p class="title">{anime?.name?.chinese}</p>
</div>

<style>
    .card {
        display: flex;
        justify-content: space-between;
        flex: 1 1;
        width: 200px;
        align-items: center;
        gap: 5px;
    }

    .card:hover {
        cursor: pointer
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
