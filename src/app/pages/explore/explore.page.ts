import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/service.book';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.page.html',
  styleUrls: ['./explore.page.scss'],
  providers: [
    BookService
  ]
})
export class ExplorePage implements OnInit {
  private listAll: any[] = [];
 
  constructor(private bookservice:BookService) { }

  ngOnInit() {
    this.getLists()
  }

  getLists() : void {
    this.bookservice.getByList().subscribe((e)=>{
      this.listAll = e.results;
    })
  }

}
