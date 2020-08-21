import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';
import { BoatComponent } from './boat.component';
import { ListComponent } from './list/list.component';
import { AddEditComponent } from './addedit/addedit.component';
import { BoatService } from './boat.service';



@NgModule({
  declarations: [
    BoatComponent, 
    ListComponent, 
    AddEditComponent
  ],
  imports: [
    SharedModule
  ],
  providers:[
    BoatService
  ]
})
export class BoatModule { }
