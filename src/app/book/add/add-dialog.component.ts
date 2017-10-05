import {Component, Inject} from '@angular/core';
import {MD_DIALOG_DATA, MdDialogRef} from '@angular/material';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-dialog',
  templateUrl: './add-dialog.component.html'
})
export class AddDialogComponent {

  constructor(public dialogRef: MdDialogRef<AddDialogComponent>,
              @Inject(MD_DIALOG_DATA) public book: string,
              private appRouter: Router) {
  }

  addMore(): void {
    this.dialogRef.close();
  }

  navigateToBooks(): void {
    this.dialogRef.close();
    this.appRouter.navigateByUrl('books/all');
  }
}
