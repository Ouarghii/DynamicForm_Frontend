import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'; // Import ReactiveFormsModule
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FieldListComponent } from './field-list/field-list.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { ReportComponent } from './report/report.component';
import { CreateEditFieldComponent } from './create-edit-field/create-edit-field.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    FieldListComponent,
    DynamicFormComponent,
    ReportComponent,
    CreateEditFieldComponent
  ],
  imports: [
    MatDialogModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
