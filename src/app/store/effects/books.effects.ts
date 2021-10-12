import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
import { BooksService } from 'src/app/services/books.service';
import { deleteBookDone, deleteBookRequest, retrieveBookListDone, retrieveBookListRequest, removeBook } from '../actions/books.actions';



@Injectable()
export class BooksEffects {



  constructor(private actions$: Actions, private booksService : BooksService) {}

  retrieveBooksList$ = createEffect(() => this.actions$.pipe(
    ofType(retrieveBookListRequest),
    switchMap(() => {
      return this.booksService.getBooksFromURL().pipe(
        map(books => retrieveBookListDone({books}))
      )
    })
  ))

  deleteBook$ = createEffect(() => this.actions$.pipe(
    ofType(removeBook),
    switchMap((action) => {
      return this.booksService.deleteBook(action.bookId).pipe(
        map(() => deleteBookDone({bookId: action.bookId}))
      )
    })
  ) )

  deleteBooks$ = createEffect(() => this.actions$.pipe(
    ofType(deleteBookRequest),
    mergeMap((action) => 
      this.booksService.deleteBook(action.bookId).pipe(
        map(() => deleteBookDone({bookId : action.bookId})),
        catchError(() => EMPTY)
      )
    )
  ))

}
