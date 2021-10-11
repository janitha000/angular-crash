import { Action, createReducer, on } from "@ngrx/store";
import { addBook, deleteBookDone, deleteBookRequest, removeBook, retrieveBookListDone } from "../actions/books.actions";
import { Book } from "../../models/books.model";

export const initialState : Book[] = [
        {id : "AAA", volumeInfo : {author : "Janitha", title : "ABC Tec"}},
        {id : "BBB", volumeInfo : {author : "Vindya", title : "BBB Tec"}},
        {id : "CCC", volumeInfo : {author : "Janitha", title : "CCC Tec"}},
    ]


export interface BooksState  {
    books : Book[]
}

export const booksReducer = createReducer<Book[]>( initialState,
    on(addBook, (state : Book[], {book}) => (
        [...state, book]
    )),
    on(removeBook,(state: Book[], {bookId}) => {
        return  state.filter(x => x.id !== bookId);
        }
    ),
    on(retrieveBookListDone, (_, action) => action.books),
    on(deleteBookDone, (state: Book[], {bookId}) => {
        console.log(bookId)
        return  state.filter(x => x.id !== bookId);
    }
        
    )
);



export function reducer(state: Book[] | undefined, action : Action) : any {
    return booksReducer(state, action);
}
