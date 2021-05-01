import {Component} from '@angular/core';
//Component: decorator           chỉ dùng để khai báo
@Component({
    // template:`
    // `,
    templateUrl:'./header.component.html',
    selector:"headerComponent" ,        //dat ten component
    styleUrls:['./header.component.scss'],
})
export class Header{}