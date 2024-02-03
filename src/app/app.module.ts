import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { LayoutModule } from './layout/layout.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { appInitializer } from './root-services/initializer/app-initializer';
import { UserService } from './root-services/user/user.service';
import { CookiInterceptor } from './http/cookie.interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

    LayoutModule
  ],
  providers: [
    { 
      provide: HTTP_INTERCEPTORS, 
      useClass: CookiInterceptor, 
      multi: true 
    },
    // {
    //   provide: APP_INITIALIZER,
    //   useFactory: appInitializer,
    //   multi: true,
    //   deps: [UserService]
    // },
    provideClientHydration(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
