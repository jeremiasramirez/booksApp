import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-showbook',
  templateUrl: './showbook.component.html',
  styleUrls: ['./showbook.component.scss'],
})
export class ShowbookComponent implements OnInit {
  @Input() private data :any = null;
  constructor(private modalclose:ModalController) { }

  ngOnInit() { }

  private async back() : Promise<any>{
    this.modalclose.dismiss();
  }

}
