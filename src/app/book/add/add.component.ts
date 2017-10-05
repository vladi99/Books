import {Component, Inject, OnInit} from '@angular/core';
import {Book} from '../../models/book.model';
import {BookService} from '../../services/book.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MdDialog} from '@angular/material';
import {AddDialogComponent} from './add-dialog.component';

@Component({
  selector: 'app-add-book',
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

  showForm = true;

  constructor(@Inject(FormBuilder) fb: FormBuilder,
              private bookService: BookService,
              public dialog: MdDialog) {

    this.bookForm = fb.group({
      name: [this.book.Name, Validators.required],
      author: [this.book.Author, Validators.required],
      price: [this.book.Price, [
        Validators.required,
        Validators.min(this.minPrice),
        Validators.max(this.maxPrice)]
      ],
      rating: [this.book.Rating, [
        Validators.required,
        Validators.min(this.minRating),
        Validators.max(this.maxRating)]
      ],
      pictureUrl: this.book.PictureURL,
      description: this.book.Description
    });
  }

  ngOnInit() {
  }

  addBook(): void {
    this.bookService.addBook(this.bookForm.value)
      .subscribe((res: Book) => {
        this.dialog.open(AddDialogComponent, {
          data: res.Name
        });
        this.resetForm();
      });
  }

  resetForm(): void {
    this.showForm = false;
    // setTimeout in order to clean errors
    setTimeout(() => {
      this.bookForm.reset();
      this.showForm = true;
    });
  }
}
