import {Component, Inject} from '@angular/core';
import {MD_DIALOG_DATA, MdDialogRef, MdSnackBar} from '@angular/material';
import {BookService} from '../../services/book.service';
import {Book} from '../../models/book.model';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {

  constructor(public dialogRef: MdDialogRef<EditComponent>,
              @Inject(MD_DIALOG_DATA) public book: Book,
              private bookService: BookService,
              public snackBar: MdSnackBar) {
  }

  onCloseClick(): void {
    this.dialogRef.close();
  }

  editBook(id: number): void {
    this.dialogRef.close();
    this.bookService.deleteBook(id)
      .subscribe(() => {
        this.snackBar.openFromComponent(EditNotificationComponent, {
          duration: 2000
        });
      });
  }
}

@Component({
  template: '<span>Successfully edited!</span>'
})
export class EditNotificationComponent {}
