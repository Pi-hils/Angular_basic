import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {MyService} from './myservice.service';

import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { FakeComponent } from './fake/fake.component';
import { HttpClientModule } from '@angular/common/http'
@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    FakeComponent
  ],
  imports: [
    BrowserModule, HttpClientModule
  ],
  providers: [MyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
