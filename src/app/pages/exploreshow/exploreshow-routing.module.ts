import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExploreshowPage } from './exploreshow.page';

const routes: Routes = [
  {
    path: '',
    component: ExploreshowPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExploreshowPageRoutingModule {}
