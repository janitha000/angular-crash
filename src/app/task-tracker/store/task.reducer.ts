import { Action, createReducer, on } from "@ngrx/store";
import { Book } from "../../models/books.model";

let initialState: any[] = [];

export const taskRedcucer = createReducer<Book[]>( initialState,
    
);



export function reducer(state: Book[] | undefined, action : Action) : any {
    return taskRedcucer(state, action);
}
