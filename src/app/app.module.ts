import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentAddComponent } from './student-add/student-add.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { StudentUpdateComponent } from './student-update/student-update.component';
import { StudentDeleteComponent } from './student-delete/student-delete.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { StudentUpdateTestComponent } from './student-update-test/student-update-test.component';
import { StudentDetailNavigateComponent } from './student-detail-navigate/student-detail-navigate.component';
import { PageNotfoundComponent } from './page-notfound/page-notfound.component';

import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [
    AppComponent,
    StudentListComponent,
    StudentAddComponent,
    StudentUpdateComponent,
    StudentDeleteComponent,
    StudentDetailComponent,
    StudentUpdateTestComponent,
    StudentDetailNavigateComponent,
    PageNotfoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    AppRoutingModule,
    SweetAlert2Module.forRoot({
      buttonsStyling: false,
      customClass: 'modal-content',
      cancelButtonClass: 'btn btn-danger',
      confirmButtonClass: 'btn btn-primary'
    }),
    NgxSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    StudentAddComponent,
    StudentUpdateComponent,
    StudentDeleteComponent,
    StudentDetailComponent,
    StudentUpdateTestComponent
  ]
})
export class AppModule { }
