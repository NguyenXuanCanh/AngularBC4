import {Component} from '@angular/core';
//Component: decorator           chỉ dùng để khai báo
@Component({
    // template:`
    // `,
    templateUrl:'./content.component.html',
    selector:"contentComponent" ,        //dat ten component
    styleUrls:['./content.component.scss'],
})
export class Content{}