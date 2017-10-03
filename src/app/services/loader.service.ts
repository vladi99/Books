import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {LoaderState} from '../book/loader/loader';

@Injectable()
export class LoaderService {

  private loaderSubject = new Subject<LoaderState>();
  loaderState = this.loaderSubject.asObservable();

  constructor() {
  }

  show() {
    this.loaderSubject.next(<LoaderState>{show: true});
  }

  hide() {
    // wait to simulate request
    setTimeout(() => {
      this.loaderSubject.next(<LoaderState>{show: false});
    }, 1500);
  }
}
