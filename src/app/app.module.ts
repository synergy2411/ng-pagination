import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppComponent } from './app.component';
import { GlobalErrorHandle } from './Global-erro-handler-service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxPaginationModule
  ],
  providers: [{
    provide : ErrorHandler, useClass : GlobalErrorHandle
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
