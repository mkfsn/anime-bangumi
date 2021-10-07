class AnimeOnAir {
    spec: string;
    time: Date;

    constructor(init: AnimeOnAir) {
        this.spec = init.spec;
        this.time = parseDate(init.time);
    }
}

class AnimeName {
    japanese: string;
    chinese: string;

    constructor(init: AnimeName) {
        this.japanese = init.japanese;
        this.chinese = init.chinese;
    }
}

class AnimeImage {
    url: string;
    thumbnailUrl: string;

    constructor(init: AnimeImage) {
        this.url = init.url;
        this.thumbnailUrl = init.thumbnailUrl;
    }

    getThumbnailUrl(): string {
        if (this.thumbnailUrl) {
            return this.thumbnailUrl;
        }

        const size = this.url.length;
        const index = size - 4;

        return this.url.slice(0, index) + "-300x300" + this.url.slice(index);
    }
}

class Anime {
    id: string;
    name: AnimeName;
    onAir: AnimeOnAir;
    images: AnimeImage[];
    story: string;

    constructor(init: Anime) {
        this.id = init.id;
        this.name = init.name !== undefined ? new AnimeName(init.name) : undefined;
        this.onAir = init.onAir !== undefined ? new AnimeOnAir(init.onAir) : undefined;
        this.images = init.images !== undefined ? init.images.map(v => new AnimeImage(v)) : undefined;
        this.story = init.story;
    }
}

function parseDate(str: string | Date): Date {
    if (str !== undefined && str !== null) {
        return new Date(str);
    }
    return undefined;
}

export { Anime }
