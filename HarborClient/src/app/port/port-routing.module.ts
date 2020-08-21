import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
;
import { BoatComponent } from './boat/boat.component';
import { ListComponent } from './boat/list/list.component';
import { AddEditComponent } from './boat/addedit/addedit.component';


const routes: Routes = [
  {
    path:'',
    children:[
      {
        path:'boat',
        component: BoatComponent,
        children:[
          {path: '',  redirectTo: 'list', pathMatch: 'full'},
          {path: 'list', component: ListComponent},
          { path: 'add', component: AddEditComponent},
          { path: 'edit/:id', component: AddEditComponent},
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortRoutingModule { }
