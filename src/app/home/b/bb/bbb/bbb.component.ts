import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-bbb',
  templateUrl: './bbb.component.html',
  styleUrls: ['./bbb.component.css']
})



export class BbbComponent implements OnInit {

  private id:string;
  constructor(
    private router: Router,
    private routeInfo: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.routeInfo.snapshot.queryParamMap.get('id')
  }

}
