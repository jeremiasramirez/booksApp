import { Component, Input } from '@angular/core';
import { BookService } from 'src/app/services/service.book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
  providers: [BookService]
})
export class BookComponent{
  
  @Input() private elements :any[] = [];
  @Input() private start :number = 0;
  @Input() private end :number=8;


  private opts={ slidesPerView:2.3, freeMode:true,spaceBetween: -7};


  constructor(private service:BookService) { }

  private watch(data:{}) : void{
    this.service.openToBook(data);
  }

}
