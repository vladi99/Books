import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppComponent} from './app.component';
import {NavComponent} from './nav/nav.component';
import {MdButtonModule, MdToolbarModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';

import {appRouter} from './app.router';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
  ],
  imports: [
    FlexLayoutModule,
    BrowserAnimationsModule,
    MdButtonModule,
    BrowserModule,
    HttpModule,
    MdToolbarModule,
    appRouter
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
