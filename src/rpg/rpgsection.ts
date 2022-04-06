import { RpgPost } from "./rpgpost";
export class RpgSection {
    sectionName: string;
    posts: RpgPost[];
    constructor(sectionName: string, posts: RpgPost[]) {
        this.sectionName = sectionName;
        this.posts = posts;
    }
};
export type RpgSession = RpgSection[];
