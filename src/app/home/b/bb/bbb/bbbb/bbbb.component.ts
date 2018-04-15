import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'


@Component({
  selector: 'app-bbbb',
  templateUrl: './bbbb.component.html',
  styleUrls: ['./bbbb.component.css']
})


export class BbbbComponent implements OnInit {

  private name:string
  constructor(
    private routeInfo: ActivatedRoute
  ) { }

  ngOnInit() {
    this.name = this.routeInfo.snapshot.data[0].name
  }

}
