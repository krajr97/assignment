import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Q1Component } from './q1/q1.component';
import { Q2Component } from './q2/q2.component';
import { Q3Component } from './q3/q3.component';
import { Q4Component } from './q4/q4.component';
import { FormsModule } from '@angular/forms';
import { ComponentXComponent } from './component-x/component-x.component';
import { ComponentYComponent } from './component-y/component-y.component';
import { HttpClientModule } from "@angular/common/http";
import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component';
import { CComponent } from './c/c.component';
import { DComponent } from './d/d.component';
import { EComponent } from './e/e.component';

@NgModule({
  declarations: [
    AppComponent,
    Q1Component,
    Q2Component,
    Q3Component,
    Q4Component,
    ComponentXComponent,
    ComponentYComponent,
    AComponent,
    BComponent,
    CComponent,
    DComponent,
    EComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
