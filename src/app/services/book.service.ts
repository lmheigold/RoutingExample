import { Injectable } from '@angular/core';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  bookList = [
    new Book(123,"The Runner",new Date(1997),"../../../assets/img/runner.jpg","A book about a runner"),
    new Book(8979,"The Lost Child",new Date(2009),"../../../assets/img/lost.jpg","A book about a lost child"),
    new Book(345,"Yeiha",new Date(1977),"../../../assets/img/y.jpg","A book about a Yaiha"),
  ];


  constructor() { }

  getBooks():Array<Book>{
    return this.bookList;
  }

  getBookById(id:number): Book|undefined{
    return this.bookList.find((book)=>{
      return book.id == id;
    });
  }
}
