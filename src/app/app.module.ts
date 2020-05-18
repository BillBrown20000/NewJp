import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { WhereYouCanWorkComponent } from './where-you-can-work/where-you-can-work.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    WhereYouCanWorkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
