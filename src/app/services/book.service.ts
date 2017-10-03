import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Book} from '../models/book.model';
import {environment} from '../../environments/environment';
import {LoaderService} from './loader.service';
import 'rxjs/add/operator/finally';
@Injectable()
export class BookService {
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http, private loaderService: LoaderService) {
  }

  getBooks(): Observable<Book[]> {
    this.showLoader();
    return this.http.get(`${environment.apiEndpoint}/Books`)
      .map(res => res.json())
      .finally(() => this.hideLoader());
  }

  addBook(book: Book): Observable<Book> {
    return this.http.post(`${environment.apiEndpoint}/Books`, JSON.stringify(book), {
      headers: this.headers
    }).map((res) => {
      return res.json();
    });
  }

  getBook(id: number): Observable<Book> {
    this.showLoader();
    return this.http.get(`${environment.apiEndpoint}/Books/${id}`)
      .map(res => res.json())
      .finally(() => this.hideLoader());
  }

  private showLoader(): void {
    this.loaderService.show();
  }

  private hideLoader(): void {
    this.loaderService.hide();
  }
}
