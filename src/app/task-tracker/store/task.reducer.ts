import { Action, createReducer, on } from "@ngrx/store";
import { addBook, deleteBookDone, deleteBookRequest, removeBook, retrieveBookListDone, updateBookDone } from "../actions/books.actions";
import { Book } from "../../models/books.model";

let initialState: any[] = [];

export const taskRedcucer = createReducer<Book[]>( initialState,
    
);



export function reducer(state: Book[] | undefined, action : Action) : any {
    return taskRedcucer(state, action);
}
