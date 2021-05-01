import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bt2directive',
  templateUrl: './bt2directive.component.html',
  styleUrls: ['./bt2directive.component.scss']
})
export class Bt2directiveComponent implements OnInit {

  arrProduct=[
    {MaSP:1,TenSP:"Sony XZ",Gia:1000},
    {MaSP:2,TenSP:"Sony XZ2",Gia:1000},
    {MaSP:3,TenSP:"HTC U Ultra",Gia:1000},
    {MaSP:4,TenSP:"HTC U12 Plus",Gia:1000},
    {MaSP:5,TenSP:"Iphone XS MAX",Gia:1000},
    {MaSP:6,TenSP:"Iphone XR",Gia:1000},
    {MaSP:7,TenSP:"Xiaomi Mi Note 3",Gia:9900},
    {MaSP:8,TenSP:"Xiaomi Mi 8",Gia:1000},
    {MaSP:9,TenSP:"Galaxy Note 9",Gia:1000},
    {MaSP:10,TenSP:"Galaxy S9 Plus",Gia:1000},
    {MaSP:11,TenSP:"Nokia X9",Gia:1000},
  ]; 
  
  tempProduct={
    MaSP:this.arrProduct.length+1,
    TenSP:"",
    Gia:null,
  }

  constructor() { }

  ngOnInit(): void {
  }

  addProduct(){
    this.arrProduct.push(this.tempProduct);
  }

  onDeleteProduct(id:number){
    this.arrProduct=this.arrProduct.filter((item)=>item.MaSP!=id);
  }
}
