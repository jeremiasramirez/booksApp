import { Component, Input, OnInit } from '@angular/core';
import { timer } from 'rxjs';
import { BookService } from 'src/app/services/service.book';

@Component({
  selector: 'app-showcards',
  templateUrl: './showcards.component.html',
  styleUrls: ['./showcards.component.scss'],
  providers: [
    BookService
  ]
})
export class ShowcardsComponent implements OnInit {
  @Input() private elements :any[] =[];
  private end:number=8;

  constructor(private service:BookService) { }

  ngOnInit() {}

  private watch(data:{}) : void{
    this.service.openToBook(data);
  }

  
  private more(event:any){
    
    timer(500).subscribe(()=>{
      this.end+=6
      event.target.complete();
    })

  }
}
