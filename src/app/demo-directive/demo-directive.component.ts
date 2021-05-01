import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-directive',
  templateUrl: './demo-directive.component.html',
  styleUrls: ['./demo-directive.component.scss']
})
export class DemoDirectiveComponent implements OnInit {

  isIll=true;
  month=69;
  monthOpt=[
    {val:1,label:"Tháng 1"},
    {val:2,label:"Tháng 2"},
    {val:3,label:"Tháng 3"},
    {val:4,label:"Tháng 4"},

  ]
  constructor() { }

  ngOnInit(): void {
  }

  onFeel(val: boolean){
    this.isIll=val;
  }
  
  // onChangeMonth(val:number){
  //   this.month=val;
  // }

}
