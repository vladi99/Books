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

  showForm = true;

  constructor(@Inject(FormBuilder) fb: FormBuilder,
              private bookService: BookService,
              public dialog: MdDialog) {

    this.bookForm = fb.group({
      name: [this.book.Name, Validators.required],
      author: [this.book.Author, Validators.required],
      price: [this.book.Price, [
        Validators.required,
        Validators.min(Book.minPrice),
        Validators.max(Book.maxPrice)]
      ],
      rating: [this.book.Rating, [
        Validators.required,
        Validators.min(Book.minRating),
        Validators.max(Book.maxRating)]
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
