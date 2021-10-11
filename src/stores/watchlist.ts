import { writable, Writable, derived } from 'svelte/store';
import type { Anime } from "../models/anime";

type ClockType = 24 | 30;

class WatchlistStore {
    constructor(
        public clockType: Writable<ClockType> = writable(30),
        public watchlist: Writable<Anime[]> = writable([]),
    ) { }

    get animeListByWeekDay() {
        const stores = [this.clockType, this.watchlist];
        const fn = ([$clockType, $animeList]) => {
            const animeGroups = [[], [], [], [], [], [], []];

            $animeList.forEach((anime: Anime) => {
                const onAirTime = anime.onAir.time;
                if (!onAirTime) {
                    return
                }

                let dateStr = onAirTime.toLocaleString('ja-JP', {timeZone: 'Asia/Tokyo'});
                let onAirJST = new Date(dateStr);

                // 30-hour clock
                if ($clockType === 30) {
                    onAirJST.setHours(onAirJST.getHours() - 6);
                }

                animeGroups[onAirJST.getDay()].push(anime);
            })

            animeGroups.map(animeList => {
                return animeList.sort();
            })

            return animeGroups;
        }

        return derived(stores, fn);
    }
}

const watchlistStore = new WatchlistStore();

export { watchlistStore };
