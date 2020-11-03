import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
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
  private foryouBooks :any[] = [];
  private obsFiction:any;
  private obsNoFiction:any;
  constructor(private serviceBook:BookService) { }

  ngOnInit() {
    this.getFiction();
    this.getNoFiction();  
  }
  ngOnDestroy(){
    this.obsFiction.unsubscribe()
    this.obsNoFiction.unsubscribe()
  }
  
  private getFiction() : void{
    this.obsFiction =this.serviceBook.getFictionBooks().subscribe((resp)=>{
      this.books = resp.results.books;
    })
  }

 
  private getNoFiction() : void{
    this.obsNoFiction=this.serviceBook.getNoFictionBooks().subscribe((resp)=>{
      this.noFictionBooks = resp.results.books;
    })
  }

}
