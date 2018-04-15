import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-aa',
  templateUrl: './aa.component.html',
  styleUrls: ['./aa.component.css']
})

export class AaComponent implements OnInit {

  @Input() id:string;

  constructor(
    private router: Router,
    private routeInfo: ActivatedRoute
  ) { }

  ngOnInit() {
    this.routeInfo.paramMap.subscribe((param: ParamMap) => this.id = param.get('id'))
  }

  gotoNext(){
    this.router.navigate(['aaa'], { relativeTo: this.routeInfo, queryParams: { id: 1 } })
  }

}
