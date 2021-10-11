import { createAction, props } from "@ngrx/store";
import { Book } from "../../models/books.model";

export const addBook = createAction('[Book] Add Book', props<{book : Book}>())
export const removeBook = createAction('[Book] Remove Book', props<{bookId : string}>());

export const retrieveBookListRequest = createAction('[Book] Get Books Request');
export const retrieveBookListDone = createAction('[Book] Get Books Done', props<{books: Book[]}>());

export const deleteBookRequest = createAction('[Book] Delete Book Request', props<{bookId: string}>());
export const deleteBookDone = createAction('[Book] Delete Book Done', props<{bookId: string}>());