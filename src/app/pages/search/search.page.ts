import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/service.book';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
  providers: [
    BookService
  ]
})
export class SearchPage implements OnInit {

  constructor(private bookService:BookService) { }

  ngOnInit() {
  }

}
