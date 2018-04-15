import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-bb',
  templateUrl: './bb.component.html',
  styleUrls: ['./bb.component.css']
})
export class BbComponent implements OnInit {

  @Input() id:string;
  
  constructor(
    private router: Router,
    private routeInfo: ActivatedRoute
  ) { }

  ngOnInit() {
    this.routeInfo.paramMap.subscribe((param: ParamMap) => this.id = param.get('id'))
  }

  gotoNext(){
    this.router.navigate(['bbb'], { relativeTo: this.routeInfo, queryParams: { id: 1 } })
  }
  

}
