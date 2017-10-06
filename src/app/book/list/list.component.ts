import {Component, OnInit} from '@angular/core';
import {BookService} from '../../services/book.service';
import {Book} from '../../models/book.model';
import 'rxjs/add/operator/map';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {
  ///////////////// comments are for search functionality

  // bookCtrl: FormControl;
  // filteredBooks: Observable<any[]>;

  books: Array<Book>;

  constructor(private bookService: BookService) {
    this.books = [];
    // this.bookCtrl = new FormControl();
  }

  ngOnInit() {
    this.bookService.getBooks()
      .subscribe((res: Book[]) => {
        this.books = res;
      });
    // this.filteredBooks = this.bookCtrl.valueChanges
    //   .startWith(null)
    //   .map(state => state ? this.filterBooks(state) : this.books.slice());
  }

  // filterBooks(name: string) {
  //   return this.books.filter(book =>
  //     book.Name.toLowerCase().indexOf(name.toLowerCase()) === 0);
  // }
}
