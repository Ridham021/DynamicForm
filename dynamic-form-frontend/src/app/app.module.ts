import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {ShowFormComponent} from './show-form/show-form.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { DynamicFormQuestionComponent } from './dynamic-form-question/dynamic-form-question.component';
import {CommonModule} from "@angular/common";
import { CreateFormComponent } from './create-form/create-form.component';
import {MatButtonModule} from "@angular/material/button";
import { CreateFormDialogComponent } from './dialog/create-form-dialog/create-form-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import {HttpClient, HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    ShowFormComponent,
    DynamicFormQuestionComponent,
    CreateFormComponent,
    CreateFormDialogComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    CommonModule,
    MatButtonModule,
    MatDialogModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
