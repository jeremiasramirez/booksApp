import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent{
  
  @Input() private elements :any[] = [];
  @Input() private start :number = 0;
  @Input() private end :number=8;


  private opts={ slidesPerView:2.3, freeMode:true,spaceBetween: -7};


  constructor() { }

  

}
