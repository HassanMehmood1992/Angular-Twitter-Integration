import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { HomeComponent } from './home/home.component';
import { EditComponent } from './edit/edit.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MaterialModule } from './material/material.module';
import { Daterangepicker } from 'ng2-daterangepicker';
import {DragDropModule} from '@angular/cdk/drag-drop';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EditComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    AngularFontAwesomeModule,
    Daterangepicker,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
