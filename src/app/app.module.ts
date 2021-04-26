import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from "@angular/common";
import { LayoutModule } from "./shared/layouts/layout/layout.module";

import { AppComponent } from './app.component';


@NgModule({
  declarations: [ AppComponent ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    LayoutModule,
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
