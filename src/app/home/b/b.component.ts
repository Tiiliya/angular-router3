import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common'

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.css']
})
export class BComponent implements OnInit {

  constructor(
    private location: Location
  ) { }

  ngOnInit() {
  }
  goback(){
    this.location.back()
  }
}
