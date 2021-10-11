import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { decrement, increment, reset } from 'src/app/store/actions/counter.action';
import { Book } from 'src/app/models/books.model';
import { selectBooks } from 'src/app/store/selectors/books.selectors';
import { BooksState } from 'src/app/store/reducers/books.reducer';
import { AppState } from 'src/app/models/appstate.model';


@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.css']
})
export class CountComponent implements OnInit {
  count$! : Observable<number>;
  books$! : Observable<Book[]>;

  // constructor(private store: Store<{ count: number }>) {
    constructor(private store: Store<AppState>) {
    this.count$ = store.select('count');
    //this.books$ = store.pipe(select(selectBooks));
    this.books$ = store.select('books')
  }

  ngOnInit(): void {
    console.log(this.count$.subscribe(data => console.log(data)))
    console.log(this.books$.subscribe(data => console.log(data)))
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

}
