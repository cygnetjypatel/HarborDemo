import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-addedit',
  templateUrl: './addedit.component.html',
  styleUrls: ['./addedit.component.scss']
})
export class AddEditComponent implements OnInit {

  public boatId: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.route.paramMap.subscribe((param) => {
      this.boatId = +param.get('id');
    });
  }

  public ngOnInit(): void {
    this.boatId = this.boatId ? this.boatId : 0;
  }

}
