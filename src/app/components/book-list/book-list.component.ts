import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  bookList = Array<Book>();

  constructor(private _bookService: BookService) { }

  ngOnInit(): void {
    this.bookList = this._bookService.getBooks();
  }

}
