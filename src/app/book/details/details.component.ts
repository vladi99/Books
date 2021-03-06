import {Component, OnInit} from '@angular/core';
import {BookService} from '../../services/book.service';
import {ActivatedRoute} from '@angular/router';
import {Book} from '../../models/book.model';
import {MdDialog} from '@angular/material';
import {DeleteComponent} from '../delete/delete.component';
import {EditComponent} from '../edit/edit.component';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})

export class DetailsComponent implements OnInit {
  private sub: any;
  private id: number;

  book: Book = new Book();

  constructor(private bookService: BookService,
              private router: ActivatedRoute,
              public dialog: MdDialog) {
  }

  ngOnInit() {
    this.sub = this.router.params.subscribe(params => {
      this.id = params['id'];
    });

    this.bookService.getBook(this.id)
      .subscribe((res: Book) => {
        this.book = res;
      }, (err) => {
        // TODO: Think what to do if not found
        console.log(err);
      });
  }

  openDeleteDialog(): void {
    this.dialog.open(DeleteComponent, {
      data: { name: this.book.Name, id: this.book.Id }
    });
  }

  openEditDialog(): void {
    const dialogRef = this.dialog.open(EditComponent, {
      data: this.book
    });

    dialogRef.afterClosed().subscribe(result => {
      this.book = result;
    });
  }
}
