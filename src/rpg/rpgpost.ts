export interface RpgPost {
    content: string;
    date: string;
    hun: boolean;
    streamlinedDate: boolean;
    unixTimestamp: number | undefined;
    user: string;
    /*constructor(content: string, date: string, hun: boolean, user: string,
     unixTimestamp : number | undefined) {
        this.content = content;
        this.date = date;
        this.unixTimestamp = unixTimestamp;
        this.hun = hun;
        this.streamlinedDate = !(unixTimestamp === undefined);
        this.user = user;
    }*/
    /*convertDate() : Date {
        return (this.streamlinedDate && this.unixTimestamp != null) ? new Date(this.unixTimestamp*1000) : new Date(this.date);
    }*/
};
export function convertDate(post : RpgPost) : Date {
    return (post.streamlinedDate && post.unixTimestamp != null) ? new Date(post.unixTimestamp*1000) : new Date(post.date);
}