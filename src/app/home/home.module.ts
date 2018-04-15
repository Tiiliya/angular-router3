import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module'

import { HomeComponent } from './home.component';
import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component';
import { AaComponent } from './a/aa/aa.component';
import { BbComponent } from './b/bb/bb.component';
import { AaaComponent } from './a/aa/aaa/aaa.component';
import { BbbComponent } from './b/bb/bbb/bbb.component';
import { AaaaComponent } from './a/aa/aaa/aaaa/aaaa.component';
import { BbbbComponent } from './b/bb/bbb/bbbb/bbbb.component';


@NgModule({
  declarations: [
    HomeComponent,
    AComponent,
    BComponent,
    AaComponent,
    BbComponent,
    AaaComponent,
    BbbComponent,
    AaaaComponent,
    BbbbComponent
  ],
  imports: [
    BrowserModule,
    HomeRoutingModule
  ],
  providers: [],
  bootstrap: []
})
export class HomeModule { }