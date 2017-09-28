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
  displayedColumns = ['id', 'photo', 'name', 'author', 'price', 'rating'];
  books: Array<Book>;
  dataSource: BooksDataSource | null;
  @ViewChild(MdPaginator) paginator: MdPaginator;

  constructor(private bookService: BookService) {
    this.books = [];
  }

  ngOnInit() {
    this.bookService.getBooks()
      .subscribe((res: Book[]) => {
        this.books = res;
        this.dataSource = new BooksDataSource(this.books, this.paginator);
      });
  }
}

export class BooksDataSource extends DataSource<any> {
  constructor(private data: Book[], private paginator: MdPaginator) {
    super();
  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<Book[]> {
    const displayDataChanges = [
      this.data,
      this.paginator.page,
    ];

    return Observable.merge(...displayDataChanges).map(() => {
      const data = this.data.slice();
      // Grab the page's slice of data.
      const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
      return data.splice(startIndex, this.paginator.pageSize);
    });
  }

  disconnect() {
  }
}
