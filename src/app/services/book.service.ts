import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class BookService {

  private getBooksUrl = 'http://milenabooks.azurewebsites.net/api/Books';

  constructor(private http: Http) {
  }

  getBooks(): Observable<Response> {
    return this.http.get(this.getBooksUrl);
  }
}
