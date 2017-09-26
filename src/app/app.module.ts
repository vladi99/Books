import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {HttpModule} from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppComponent} from './app.component';
import {BookModule} from './book/book.module';
import {BookService} from './services/book.service';
import {NavComponent} from './nav/nav.component';
import {MdToolbarModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    HttpModule,
    BookModule,
    MdToolbarModule,
    RouterModule.forRoot([
      {path: '', redirectTo: '/', pathMatch: 'full'},
    ])
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
