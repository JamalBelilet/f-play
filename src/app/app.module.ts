import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AtForminiComponent } from './at-formini/at-formini.component';
import { DbMetaDataService } from './db-meta-data.service';


@NgModule({
  declarations: [
    AppComponent,
    AtForminiComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [DbMetaDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
