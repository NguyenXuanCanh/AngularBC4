import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bt-directive',
  templateUrl: './bt-directive.component.html',
  styleUrls: ['./bt-directive.component.scss']
})
export class BtDirectiveComponent implements OnInit {

  name:string;
  isLogin=false;
  username:string;
  password:string;
  constructor() { }

  ngOnInit(): void {
  }

  onLogin(){
    if(this.username=="admin" && this.password=="admin"){
      this.isLogin=true;
      this.name="admin";
    }
  }
}
