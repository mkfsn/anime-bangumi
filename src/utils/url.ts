import type { Anime } from "../models/anime";

function storeAnimeListToUrl(animeList: Anime[]) {
    const animeGroups = {};

    animeList.forEach(anime => {
        const yearMonth = `${anime.year}${anime.month}`;

        if (! (yearMonth in animeGroups)) {
            animeGroups[yearMonth] = [];
        }

        animeGroups[yearMonth].push(anime.id);
    });

    let newHash = "/v1";

    for (let yearMonth in animeGroups) {
        const animeIDs = animeGroups[yearMonth].join(",");
        newHash += `/${yearMonth}=${animeIDs}`;
    }

    window.location.hash = newHash;
}

export {
    storeAnimeListToUrl
}
