import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ExerciseListComponent } from './exercise-list/exercise-list.component';
import { ExercisePreviewComponent } from './exercise-preview/exercise-preview.component';
import { AngularMaterialModule} from './angular-material.module';
import { CoreComponent } from './core/core.component';


import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import {HeaderComponent} from './header/header.component';

import {MatButtonModule} from '@angular/material/button';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    BrowserModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    MatButtonModule,
    RouterModule.forRoot([
      { path: '', component: CoreComponent},
    ])
  ],
  declarations: [
    AppComponent,
    ExerciseListComponent,
    ExercisePreviewComponent,
    CoreComponent,
    HeaderComponent,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/