import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {
  fullName='Xuan Canh';
  // fullName:string;
  age=19;
  email="x.canh040701@gmail.com";
  hinhAnh="../../assets/img/image2.jpeg";

  showMsg(){
    alert(this.fullName + this.age);
  }

  increaseAge(){
    this.age++;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
