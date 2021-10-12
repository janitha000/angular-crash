import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { decrement, increment, reset } from 'src/app/store/actions/counter.action';
import { Book } from 'src/app/models/books.model';
import { booksSelector,  selectBooks ,filterdBooksSelector, onDeselectFilteredBooksSelector} from 'src/app/store/selectors/books.selectors';
import { BooksState } from 'src/app/store/reducers/books.reducer';
import { AppState } from 'src/app/models/appstate.model';
import { addBook , deleteBookRequest, logout, removeBook, retrieveBookListRequest, updateBookRequest} from 'src/app/store/actions/books.actions';



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
    this.books$ = store.pipe(select(booksSelector));
    //this.books$ = store.select('books')
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
    let book : Book= {id : "AAAA", volumeInfo: {title : "DDD Tech", author : "janitha"}}
    this.store.dispatch(addBook({book}));

  }

  onRemoveBook(){
    //this.store.dispatch(removeBook({bookId : "AAA"}) )
    this.store.dispatch(deleteBookRequest({bookId: "AAAA"}))
  }

  onUpdateBook() {
    let book = {id : "AAAA", volumeInfo : {author : "Janitha", title : "ABC Tech Updated"}}
    this.store.dispatch(updateBookRequest({book}))
  }

  onFilter(bookId : string){
    this.books$ = this.store.pipe(select(filterdBooksSelector(bookId)));
  }

  onFilterReset(){
    this.books$ = this.store.pipe(select(onDeselectFilteredBooksSelector))
  }

  onLogout(){
    this.store.dispatch(logout())
  }
}
