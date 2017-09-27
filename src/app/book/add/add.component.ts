import {Component, OnInit} from '@angular/core';
import {Book} from '../../models/book.model';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  title = 'Add Book';
  book: Book = new Book();
  constructor() {
  }

  ngOnInit() {
  }

  onSubmit(): void {

  }
}
