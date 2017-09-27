import {Component, OnInit} from '@angular/core';
import {Book} from '../../models/book.model';
import {BookService} from '../../services/book.service';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  title = 'Add Book';
  book: Book = new Book();
  bookForm: FormGroup;

  minPrice = 1;
  maxPrice = 100;

  minRating = 1;
  maxRating = 5;

  constructor(
    private bookService: BookService,
    private appRouter: Router) {
  }

  ngOnInit() {
    this.createForm();
  }

  private createForm() {
    this.bookForm = new FormGroup({
      name: new FormControl('', Validators.required),
      author: new FormControl('', Validators.required),
      price: new FormControl('', [
        Validators.required,
        Validators.min(this.minPrice),
        Validators.max(this.maxPrice)]
      ),
      rating: new FormControl('', [
        Validators.required,
        Validators.min(this.minRating),
        Validators.max(this.maxRating)]
      ),
    });
  }

  addBook(): void {
    this.bookService.addBook(this.book)
      .subscribe((res: Book) => {
        console.log(res);
        this.appRouter.navigateByUrl('books');
      }, (err) => {
        console.log(err);
      });
  }

}
