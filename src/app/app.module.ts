import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module'
import { HomeModule } from './home/home.module'


import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found.component';
// import { HomeComponent } from './home/home.component';
// import { AComponent } from './home/a/a.component';
// import { BComponent } from './home/b/b.component';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    // HomeComponent,
    // AComponent,
    // BComponent
  ],
  imports: [
    BrowserModule,
    HomeModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
