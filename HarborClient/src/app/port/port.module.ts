import { NgModule } from '@angular/core';

import { PortRoutingModule } from './port-routing.module';
import { SharedModule } from '../shared/shared.module';
import { BoatModule } from './boat/boat.module';


@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    PortRoutingModule,
    BoatModule
  ]
})
export class PortModule { }
