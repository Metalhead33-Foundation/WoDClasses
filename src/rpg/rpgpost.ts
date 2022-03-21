export class RpgPost {
    content: string;
    date: string;
    hun: boolean;
    streamlinedDate: boolean;
    unixTimestamp: number | undefined;
    user: string;

    convertDate() : Date {
        return (this.streamlinedDate && this.unixTimestamp != null) ? new Date(this.unixTimestamp*1000) : new Date(this.date);
    }
};