import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';
import { BoatComponent } from './boat.component';
import { ListComponent } from './list/list.component';
import { AddEditComponent } from './addedit/addedit.component';



@NgModule({
  declarations: [
    BoatComponent, 
    ListComponent, 
    AddEditComponent
  ],
  imports: [
    SharedModule
  ]
})
export class BoatModule { }
