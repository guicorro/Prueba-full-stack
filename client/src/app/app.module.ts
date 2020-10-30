import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DocumentService } from './services/document.service';
import { NewComponent } from './components/new/new.component';
import { ArchivedComponent } from './components/archived/archived.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NewComponent,
    ArchivedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule

  ],
  providers: [DocumentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
