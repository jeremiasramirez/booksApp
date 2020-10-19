import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-showexplore',
  templateUrl: './showexplore.component.html',
  styleUrls: ['./showexplore.component.scss'],
})
export class ShowexploreComponent implements OnInit {
  @Input() private elements :any[] = [];
  constructor() { }

  ngOnInit() {}

}
