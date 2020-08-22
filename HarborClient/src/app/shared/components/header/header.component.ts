//#region Angular Import
import { Component, OnInit } from '@angular/core';
//#endregion

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  //#region Constructor

  constructor() { }

  //#endregion

  //#region Angular Events

  public ngOnInit(): void {
  }

  //#endregion

}
