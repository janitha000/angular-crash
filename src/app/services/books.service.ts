import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Book } from '../models/books.model';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor() { }

  booksFromHTTP: Book[] = [
    {id : "AAAA", volumeInfo : {author : "Janitha", title : "ABC Tech"}},
    {id : "BBBB", volumeInfo : {author : "Vindya", title : "BBB Tech"}},
    {id : "CCCC", volumeInfo : {author : "Janitha", title : "CCC Tech"}},
]

  getBooksFromURL() {
    return of(this.booksFromHTTP);
  }

  deleteBook(id : string) {
    return of(["AAAA"]);
  }
}
