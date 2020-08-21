import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { BoatComponent } from './boat.component';
import { ListComponent } from './list/list.component';



@NgModule({
  declarations: [BoatComponent, ListComponent],
  imports: [
    SharedModule
  ]
})
export class BoatModule { }
