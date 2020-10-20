import { Component, Input, OnInit } from '@angular/core';
import {Router } from '@angular/router';
import { timer } from 'rxjs';

@Component({
  selector: 'app-showexplore',
  templateUrl: './showexplore.component.html',
  styleUrls: ['./showexplore.component.scss'],
})
export class ShowexploreComponent implements OnInit {

  @Input() private elements :any[] = [];

  private start:number=0;
  private end:number=20;

  constructor(private routing:Router) { }

  ngOnInit() {}

  private more(event:any){
    
    timer(500).subscribe(()=>{
      this.end+=10
      event.target.complete();
    })

  }
  navigateTo(e:string){
    this.routing.navigate(["/home/explore/",e])
  }

}
