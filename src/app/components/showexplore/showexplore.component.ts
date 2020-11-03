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
  @Input () private textInput :string = '';
  private start:number=0;
  private end:number=20;
  
  private timingRouter:any;
  private timingMore:any;
  constructor(private routing:Router) { }

  ngOnInit() {}
  
  ngOnDestroy(){
    this.timingMore.unsubscribe();
    this.timingRouter.unsubscribe();
  }
  private more(event:any){
    
    this.timingMore =timer(500).subscribe(()=>{
      this.end+=10
      event.target.complete();
    })

  }
  private navigateTo(route:string){
    this.timingRouter = timer(90).subscribe(()=>{
      this.routing.navigate(["/home/explore/",route])
    })

  }

}
