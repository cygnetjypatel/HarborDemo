import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
;
import { BoatComponent } from './boat/boat.component';
import { ListComponent } from './boat/list/list.component';


const routes: Routes = [
  {
    path:'',
    children:[
      {
        path:'boat',
        component: BoatComponent,
        children:[
          {path: '',  redirectTo: 'list', pathMatch: 'full'},
          {path: 'list', component: ListComponent}
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
