import { Component, Input, OnInit } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-showcards',
  templateUrl: './showcards.component.html',
  styleUrls: ['./showcards.component.scss'],
})
export class ShowcardsComponent implements OnInit {
  @Input() private elements :any[] =[];
  private end:number=8;

  constructor() { }

  ngOnInit() {}


   private more(event:any){
    
    timer(500).subscribe(()=>{
      this.end+=6
      event.target.complete();
    })

  }
}
