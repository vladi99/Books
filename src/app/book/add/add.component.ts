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
      name: new FormControl(this.book.Name, Validators.required),
      author: new FormControl(this.book.Author, Validators.required),
      price: new FormControl(this.book.Price, [
        Validators.required,
        Validators.min(this.minPrice),
        Validators.max(this.maxPrice)]
      ),
      rating: new FormControl(this.book.Rating, [
        Validators.required,
        Validators.min(this.minRating),
        Validators.max(this.maxRating)]
      ),
      pictureUrl: new FormControl(this.book.PictureURL),
      description: new FormControl(this.book.Description)
    });
  }

  addBook(): void {
    this.bookService.addBook(this.bookForm.value)
      .subscribe((res: Book) => {
        console.log(res);
        this.appRouter.navigateByUrl('books');
      }, (err) => {
        console.log(err);
      });
  }

}
