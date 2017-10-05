import {Component, OnInit} from '@angular/core';
import {BookService} from '../../services/book.service';
import {ActivatedRoute} from '@angular/router';
import {Book} from '../../models/book.model';
import {MdDialog} from '@angular/material';
import {DeleteComponent} from '../delete/delete.component';

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

  openDialog(): void {
    this.dialog.open(DeleteComponent, {
      data: { name: this.book.Name, id: this.book.Id }
    });
  }
}
