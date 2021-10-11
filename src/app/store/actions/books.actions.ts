import { createAction, props } from "@ngrx/store";
import { Book } from "../../models/books.model";

export const addBook = createAction(
    '[Book List] Add Book',
   (book : Book) => ({book})
)

export const removeBook = createAction(
    '[Book Collection] Remove Book',
    props<{ bookId: string }>()
  );
   
  export const retrievedBookList = createAction(
    '[Book List/API] Retrieve Books Success',
    props<{ book: Book }>()
  );