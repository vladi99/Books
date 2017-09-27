import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Book} from '../models/book.model';

@Injectable()
export class BookService {
  private headers = new Headers({'Content-Type': 'application/json'});

  private getPostBooksUrl = 'http://milenabooks.azurewebsites.net/api/Books';

  constructor(private http: Http) {
  }

  getBooks(): Observable<Book[]> {
    return this.http.get(this.getPostBooksUrl)
      .map((res) => {
        return res.json();
      });
  }

  addBook(book: Book): Observable<Book> {
    return this.http.post(this.getPostBooksUrl, JSON.stringify(book), {
      headers: this.headers
    }).map((res) => {
      return res.json();
    });
  }
}
