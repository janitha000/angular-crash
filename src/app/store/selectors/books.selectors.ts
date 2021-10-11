import { createFeatureSelector, createSelector } from '@ngrx/store';
import { BooksState } from '../reducers/books.reducer';

export const selectBooksState = createFeatureSelector<BooksState>(
    'book'
)


export const selectBooks = createSelector(
    selectBooksState,
    (state: BooksState) => state.books
)