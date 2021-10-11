import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { decrement, increment, reset } from 'src/app/store/actions/counter.action';
import { Book } from 'src/app/models/books.model';
import { selectBooks } from 'src/app/store/selectors/books.selectors';
import { BooksState } from 'src/app/store/reducers/books.reducer';
import { AppState } from 'src/app/models/appstate.model';
import { addBook , deleteBookRequest, removeBook, retrieveBookListRequest} from 'src/app/store/actions/books.actions';



@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.css']
})
export class CountComponent implements OnInit {
  count$! : Observable<number>;
  books$! : Observable<Book[]>;

  constructor(private store: Store<AppState>) {
    this.count$ = store.select('count');
    //this.books$ = store.pipe(select(selectBooks));
    this.books$ = store.select('books')
  }

  ngOnInit(): void {
    this.store.dispatch(retrieveBookListRequest())
  }

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }

  onAddBook() {
    let book : Book= {id : "4", volumeInfo: {title : "DDD Tech", author : "janitha"}}
    this.store.dispatch(addBook({book}));

  }

  onRemoveBook(){
    //this.store.dispatch(removeBook({bookId : "AAA"}) )
    this.store.dispatch(deleteBookRequest({bookId: "AAAA"}))
  }
}
