import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { WindService } from './Services/wind/wind.service';
import { HeaderComponent } from './components/header/header.component';
import { BoatService } from './Services/boat/boat.service';


@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HeaderComponent
  ],
  providers: [
    WindService,
    BoatService
  ]
})


export class SharedModule { }
