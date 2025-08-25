export type Show = {
    id:number;
    url:string;
    name: string;
    genres: string[];
    rating: {average?: number;};
    summary?: string;
    image?: {medium: string; original: string;};
    cast?: {id: number,url:string, name: string, image: {medium: string, original: string} | null}[];
}