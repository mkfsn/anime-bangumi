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

class AnimeCasting {
    character: string;
    voiceActor: string;

    constructor(init: AnimeCasting) {
        this.character = init.character;
        this.voiceActor = init.voiceActor;
    }
}

class AnimeStaff {
    role: string;
    name: string;

    constructor(init: AnimeStaff) {
        this.role = init.role;
        this.name = init.name;
    }
}

class Anime {
    id: string;
    year?: number;
    month?: number;
    name: AnimeName;
    onAir: AnimeOnAir;
    images: AnimeImage[];
    story: string;
    copyright: string;
    castings: AnimeCasting[];
    staffs: AnimeStaff[];

    constructor(init: Anime, year?: number, month?: number) {
        this.id = init.id;
        this.year = year;
        this.month = month;
        this.name = init.name !== undefined ? new AnimeName(init.name) : undefined;
        this.onAir = init.onAir !== undefined ? new AnimeOnAir(init.onAir) : undefined;
        this.images = init.images !== undefined ? init.images.map(v => new AnimeImage(v)) : undefined;
        this.story = init.story;
        this.copyright = init.copyright;
        this.castings = init.castings !== undefined ? init.castings.map(v => new AnimeCasting(v)) : undefined;
        this.staffs = init.staffs !== undefined ? init.staffs.map(v => new AnimeStaff(v)) : undefined;
    }
}

function parseDate(str: string | Date): Date {
    if (str !== undefined && str !== null) {
        return new Date(str);
    }
    return undefined;
}

export { Anime }
