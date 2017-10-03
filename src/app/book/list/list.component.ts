import {Component, OnInit} from '@angular/core';
import {BookService} from '../../services/book.service';
import {Book} from '../../models/book.model';
import 'rxjs/add/operator/map';

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
