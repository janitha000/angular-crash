import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Book } from 'src/app/models/books.model';
import { BooksState } from '../reducers/books.reducer';

export const selectBooksState = createFeatureSelector<BooksState>('books')


export const selectBooks = createSelector(
    selectBooksState,
    (state: BooksState) => state.books
) 

export const booksSelector = createSelector(
    (state: BooksState) => state.books,
    (books: Book[]) => books
)

// export const filterdBooksSelector = createSelector(
//     (state: BooksState) => state.books,
//     (state: BooksState) => state.filteredBook,
//     (books : Book[], filteredBook :string) => {
//         return books.filter(x => x.id === filteredBook)
//     }
// )

export const filterdBooksSelector = (bookId :string) => 
    createSelector(booksSelector, (books) => {
        return books.filter(x => x.id === bookId);
    })

export const onDeselectFilteredBooksSelector = createSelector(
    booksSelector,
    (state: Book[]) => state
)