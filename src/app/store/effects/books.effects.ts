import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';
import { BooksService } from 'src/app/services/books.service';
import { deleteBookDone, deleteBookRequest, retrieveBookListDone, retrieveBookListRequest } from '../actions/books.actions';



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
    ofType(deleteBookRequest),
    switchMap((action) => {
      return this.booksService.deleteBook(action.bookId).pipe(
        map(() => deleteBookDone({bookId: action.bookId}))
      )
    })
  ) )

}
