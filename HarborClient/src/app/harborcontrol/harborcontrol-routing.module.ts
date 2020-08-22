//#region Angular Imports
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//#endregion

//#region Harbor Imports
import { HarborControlComponent } from './harborcontrol/harborcontrol.component';
//#endregion

const routes: Routes = [
  {
    path: '',
    component: HarborControlComponent

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HarborcontrolRoutingModule { }
