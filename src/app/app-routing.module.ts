import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { GridComponent } from './mycomponents/grid/grid.component';
import { RowDetailsComponent } from './mycomponents/row-details/row-details.component';

const routes: Routes = [
  // { path: '', component: GridComponent },
  { path: 'row-details/:id', component: RowDetailsComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
