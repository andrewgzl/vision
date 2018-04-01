import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

import { HomeComponent } from './home.component';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [HomeComponent]
})
export class HomeModule { }
