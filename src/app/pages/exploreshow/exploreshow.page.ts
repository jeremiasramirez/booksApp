import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-exploreshow',
  templateUrl: './exploreshow.page.html',
  styleUrls: ['./exploreshow.page.scss'],
})
export class ExploreshowPage implements OnInit {

  constructor(private param:ActivatedRoute) { }

  ngOnInit() {
    this.param.params.subscribe((param)=>{
      console.log(param.id)
    })
  }

}
