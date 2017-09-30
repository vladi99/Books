import {Component, OnInit, ViewChild} from '@angular/core';
import {MdPaginator} from '@angular/material';
import {Observable} from 'rxjs/Observable';
import {DataSource} from '@angular/cdk/table';
import {BookService} from '../../services/book.service';
import {Book} from '../../models/book.model';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {
  books: Array<Book>;

  constructor(private bookService: BookService) {
    this.books = [];
  }

  ngOnInit() {
    this.bookService.getBooks()
      .subscribe((res: Book[]) => {
        this.books = res;
      });
  }
}
