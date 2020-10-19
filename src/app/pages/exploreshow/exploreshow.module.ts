import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExploreshowPageRoutingModule } from './exploreshow-routing.module';

import { ExploreshowPage } from './exploreshow.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExploreshowPageRoutingModule
  ],
  declarations: [ExploreshowPage]
})
export class ExploreshowPageModule {}
