//#region Angular Imports
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
//#endregion

//#region Harbor Imports
import { HarborcontrolRoutingModule } from './harborcontrol-routing.module';
import { HarborControlComponent } from './harborcontrol/harborcontrol.component';
//#endregion

@NgModule({
  declarations: [
    HarborControlComponent
  ],
  imports: [
    SharedModule,
    HarborcontrolRoutingModule
  ]
})
export class HarborcontrolModule { }
