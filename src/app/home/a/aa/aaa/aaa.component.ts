import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-aaa',
  templateUrl: './aaa.component.html',
  styleUrls: ['./aaa.component.css']
})
export class AaaComponent implements OnInit {
  private id:string;
  constructor(
    private router: Router,
    private routeInfo: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.routeInfo.snapshot.queryParamMap.get('id')
  }

}
