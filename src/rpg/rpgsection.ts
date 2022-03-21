import { RpgPost } from "./rpgpost";
export class RpgSection {
    sectionName: string;
    posts: RpgPost[];
};
export type RpgSession = RpgSection[];