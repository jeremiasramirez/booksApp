import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksPage } from '../books/books.page';
import { HomePage } from './home.page';

const routes: Routes = [
 
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'books', 
        loadChildren: ()=> import('../books/books.module').then((e)=>e.BooksPageModule)
      },
      {
        path: 'search', 
        loadChildren: ()=> import('../search/search.module').then((e)=>e.SearchPageModule)
      } 
    ]
  },
  {
    path: '**',
    component: BooksPage,
    redirectTo: '/home/books'
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
