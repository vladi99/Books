import {Component, Inject} from '@angular/core';
import {MD_DIALOG_DATA, MdDialogRef, MdSnackBar} from '@angular/material';
import {BookService} from '../../services/book.service';
import {Book} from '../../models/book.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {

  bookForm: FormGroup;

  minPrice = 1;
  maxPrice = 100;

  minRating = 1;
  maxRating = 5;

  constructor(@Inject(FormBuilder) fb: FormBuilder,
              public dialogRef: MdDialogRef<EditComponent>,
              @Inject(MD_DIALOG_DATA) public book: Book,
              private bookService: BookService,
              public snackBar: MdSnackBar) {

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

  onCloseClick(): void {
    this.dialogRef.close(this.book);
  }

  editBook(): void {
    this.bookService.editBook(this.book.Id, this.bookForm.value)
      .subscribe((res: Book) => {
        this.dialogRef.close(res);
        this.snackBar.openFromComponent(EditNotificationComponent, {
          duration: 2500
        });
      });
  }
}

@Component({
  template: '<span>Successfully edited!</span>'
})
export class EditNotificationComponent {}
