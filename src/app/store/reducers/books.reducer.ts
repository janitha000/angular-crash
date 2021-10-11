import { Action, createReducer, on } from "@ngrx/store";
import { addBook, retrievedBookList } from "../actions/books.actions";
import { Book } from "../../models/books.model";

export const initialState : BooksState = {
    books : [
        {id : "AAA", volumeInfo : {author : "Janitha", title : "ABC Tec"}},
        {id : "BBB", volumeInfo : {author : "Vindya", title : "BBB Tec"}},
        {id : "CCC", volumeInfo : {author : "Janitha", title : "CCC Tec"}},
    ]
}

export interface BooksState  {
    books : Book[]
}

export const booksReducer = createReducer(
    initialState,
    on(addBook, (state : BooksState, {book}) => (
        {
            ...state,
            books : [...state.books, book]
        }
    ))
)

export function reducer(state: BooksState | undefined, action : Action) : any {
    return booksReducer(state, action);
}
