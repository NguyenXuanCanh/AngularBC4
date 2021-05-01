import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { Content } from './Content/content.component';
import {DemoComponent} from './demoComponent/demo.component';
import { Header } from './Header/header.component';
import { sidebar } from './SideBar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { BtDataBindingComponent } from './bt-data-binding/bt-data-binding.component';
import { DemoDirectiveComponent } from './demo-directive/demo-directive.component';
import { BtDirectiveComponent } from './bt-directive/bt-directive.component';
import { Bt2directiveComponent } from './bt2directive/bt2directive.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    Header,
    Content,
    sidebar,
    FooterComponent,
    HomeComponent,
    DataBindingComponent,
    BtDataBindingComponent,
    DemoDirectiveComponent,
    BtDirectiveComponent,
    Bt2directiveComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
