import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-showbook',
  templateUrl: './showbook.component.html',
  styleUrls: ['./showbook.component.scss'],
})
export class ShowbookComponent implements OnInit {
  @Input() private data :any = null;
  constructor() { }

  ngOnInit() {
    console.log(this.data)
  }

}
