import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CocktailListComponent } from './cocktail-list/cocktail-list.component';
import { LogInterceptor } from './core/log.interceptor';
import { RequestDurationService } from './request-duration.service';
import { reqDurationInterceptor } from './core/reqDuration-interceptor';

@NgModule({
  declarations: [
    AppComponent,
    CocktailListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    RequestDurationService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LogInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: reqDurationInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
