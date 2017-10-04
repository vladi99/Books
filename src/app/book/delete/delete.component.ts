import {Component, Inject} from '@angular/core';
import {MD_DIALOG_DATA, MdDialogRef} from '@angular/material';
import {BookService} from '../../services/book.service';
import {Book} from '../../models/book.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent {

  constructor(
    public dialogRef: MdDialogRef<DeleteComponent>,
    @Inject(MD_DIALOG_DATA) public book: any,
    private bookService: BookService,
    private appRouter: Router
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  deleteBook(id: number): void {
    this.dialogRef.close();
    this.bookService.deleteBook(id)
      .subscribe((res: Book) => {
        // TODO: think how to make this notification
        console.log(res.Name + ' is deleted');
        this.appRouter.navigateByUrl('books/all');
      });
  }
}
