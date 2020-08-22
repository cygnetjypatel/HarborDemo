//#region Angular Imports
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//#endregion

//#region Harbor Imports
import { AppComponent } from './app.component';
//#endregion


const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children:[
      {path: '', redirectTo: 'harborControl', pathMatch: 'full'},
      {
        path: 'harborControl',
        loadChildren: () =>
          import(`./harborControl/harborcontrol.module`).then((m) => m.HarborcontrolModule),
      }
    ],
    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
