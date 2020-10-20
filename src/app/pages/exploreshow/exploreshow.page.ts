import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from 'src/app/services/service.book';

@Component({
  selector: 'app-exploreshow',
  templateUrl: './exploreshow.page.html',
  styleUrls: ['./exploreshow.page.scss'],
  providers:[
    BookService
  ]
})
export class ExploreshowPage implements OnInit {
  private allList :any[] = [];
  private title:string = "Waiting.." 

  constructor(
    private param:ActivatedRoute,
    private servicebook:BookService) { }

  ngOnInit() {

    //get parameter
    this.getParam();
  }

  private getParam(){
    
    this.param.params.subscribe((param)=>{
      this.getByList(param.id)
    })

  }

  private getByList(id:any){
    
    this.servicebook.getAllLists(id).subscribe((e)=>{
      this.allList = e.results.books;
      this.title = e.results.display_name;   
    })

  }
}










