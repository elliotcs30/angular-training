import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { FontSizeComponent } from './font-size/font-size.component';
import { FontSize2Component } from './font-size2/font-size2.component';
import { FontSize3Component } from './font-size3/font-size3.component';
import { ChildComponent } from './child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    FontSizeComponent,
    FontSize2Component,
    FontSize3Component,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
