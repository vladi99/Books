import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {HttpModule} from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppComponent} from './app.component';
import {BookModule} from './book/book.module';
import {NavComponent} from './nav/nav.component';
import {MdToolbarModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
  ],
  imports: [
    FlexLayoutModule,
    BrowserAnimationsModule,
    BrowserModule,
    HttpModule,
    BookModule,
    MdToolbarModule,
    RouterModule.forRoot([
      {path: '', redirectTo: '/', pathMatch: 'full'},
    ])
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
