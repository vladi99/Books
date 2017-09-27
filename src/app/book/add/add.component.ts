import {Component, OnInit} from '@angular/core';
import {Book} from '../../models/book.model';
import {BookService} from '../../services/book.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  title = 'Add Book';
  book: Book = new Book();
  constructor(
    private bookService: BookService,
    private appRouter: Router) {
  }

  ngOnInit() {
  }

  onSubmit(): void {
    this.bookService.addBook(this.book)
      .subscribe((res: Book) => {
        console.log(res);
        this.appRouter.navigateByUrl('books');
      }, (err) => {
        console.log(err);
      });
  }
}
