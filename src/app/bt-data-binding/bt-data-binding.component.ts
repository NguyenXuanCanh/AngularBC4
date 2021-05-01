import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bt-data-binding',
  templateUrl: './bt-data-binding.component.html',
  styleUrls: ['./bt-data-binding.component.scss']
})
export class BtDataBindingComponent implements OnInit {
  email="123@gmail.com";
  fullName="";
  showInputEmail(){

  }
  showInputFullName(input:string){
    this.fullName=input;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
