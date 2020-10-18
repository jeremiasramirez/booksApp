import { Component } from '@angular/core';
import { BookService } from 'src/app/services/service.book';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  providers: [
    BookService
  ]
})
export class HomePage {

  constructor(private bookService:BookService) {

  }

}
