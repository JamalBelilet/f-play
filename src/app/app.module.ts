import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AtForminiComponent } from './at-formini/at-formini.component';
import { DbMetaDataService } from './db-meta-data.service';
import { FpHeaderComponent } from './fp-header/fp-header.component';
import { FpFooterComponent } from './fp-footer/fp-footer.component';
import { FpPlayComponent } from './fp-play/fp-play.component';


@NgModule({
  declarations: [
    AppComponent,
    AtForminiComponent,
    FpHeaderComponent,
    FpFooterComponent,
    FpPlayComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [DbMetaDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
