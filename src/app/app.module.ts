import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DbMetaDataService } from './db-meta-data.service';
import { FpHeaderComponent } from './fp-header/fp-header.component';
import { FpPlayComponent } from './fp-play/fp-play.component';
import { FpFooterComponent } from './fp-footer/fp-footer.component';
import { FpItemComponent } from './fp-item/fp-item.component';


@NgModule({
  declarations: [
    AppComponent,
    FpHeaderComponent,
    FpPlayComponent,

    FpFooterComponent,

    FpItemComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [DbMetaDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
