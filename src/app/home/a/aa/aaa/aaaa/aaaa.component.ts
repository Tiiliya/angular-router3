import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'


@Component({
  selector: 'app-aaaa',
  templateUrl: './aaaa.component.html',
  styleUrls: ['./aaaa.component.css']
})
export class AaaaComponent implements OnInit {
  private name:string
  constructor(
    private routeInfo: ActivatedRoute
  ) { }

  ngOnInit() {
    this.name = this.routeInfo.snapshot.data[0].name
  }
  

}
