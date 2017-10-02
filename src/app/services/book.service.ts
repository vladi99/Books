import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Book} from '../models/book.model';
import {environment} from '../../environments/environment';

@Injectable()
export class BookService {
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) {
  }

  getBooks(): Observable<Book[]> {
    return this.http.get(`${environment.apiEndpoint}/Books`)
      .map((res) => {
        return res.json();
      });
  }

  addBook(book: Book): Observable<Book> {
    return this.http.post(`${environment.apiEndpoint}/Books`, JSON.stringify(book), {
      headers: this.headers
    }).map((res) => {
      return res.json();
    });
  }

  getBook(id: number): Observable<Book> {
    return this.http.get(`${environment.apiEndpoint}/Books/${id}`)
      .map((res) => {
        return res.json();
      });
  }
}
