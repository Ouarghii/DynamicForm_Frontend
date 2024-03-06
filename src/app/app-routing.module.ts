// app-routing.module.ts

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FieldListComponent } from './field-list/field-list.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { ReportComponent } from './report/report.component';

const routes: Routes = [
  { path: '', redirectTo: '/fields', pathMatch: 'full' },
  { path: 'fields', component: FieldListComponent },
  { path: 'form', component: DynamicFormComponent },
  { path: 'report', component: ReportComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
