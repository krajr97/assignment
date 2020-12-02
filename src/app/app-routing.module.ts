import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Q1Component } from './q1/q1.component';
import { Q2Component } from './q2/q2.component';
import { Q3Component } from './q3/q3.component';
import { Q4Component } from './q4/q4.component';

const routes: Routes = [
  {path: "q1", component: Q1Component},
  {path: "q2", component: Q2Component},
  {path: "q3", component: Q3Component},
  {path: "q4", component: Q4Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
