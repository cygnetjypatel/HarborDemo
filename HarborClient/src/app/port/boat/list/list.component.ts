import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(private router: Router) { }

  public ngOnInit(): void {
  }

  public addBoat(): void {
    this.router.navigateByUrl('/boat/add');
  }

  public editBoat(id): void {
    this.router.navigateByUrl(`/boat/edit/${id}`);
  }

}
