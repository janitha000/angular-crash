import { Book } from "./books.model";

export interface AppState {
    count : number,
    books : Book[],
    router : any
}