import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-showcards',
  templateUrl: './showcards.component.html',
  styleUrls: ['./showcards.component.scss'],
})
export class ShowcardsComponent implements OnInit {
  @Input() private elements :any[] =[];


  constructor() { }

  ngOnInit() {}

}
