import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/service.book';
@Component({
  selector: 'app-books',
  templateUrl: './books.page.html',
  styleUrls: ['./books.page.scss'],
  providers:[
    BookService
  ]
})
export class BooksPage implements OnInit {
  private books: any[]= [];
  private noFictionBooks :any[] = [];
 
 
  constructor(private serviceBook:BookService) { }

  ngOnInit() {

    this.getFiction();
    this.getNoFiction();
   

  }

  private getFiction() : void{
    this.serviceBook.getFictionBooks().subscribe((resp)=>{
      this.books = resp.results.books;
    })
  }

 

  private getNoFiction() : void{
    this.serviceBook.getNoFictionBooks().subscribe((resp)=>{
      this.noFictionBooks = resp.results.books;
    })
  }

}
