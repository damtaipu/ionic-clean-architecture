import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// import core directory
import { CepInterceptor } from 'src/core/interceptor/http.interceptor';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { GetCepRepository } from 'src/core/repositories/cep/get-cep.repository';
import { CepFindDataRepository } from '@src/data/repository/cep/cep.repository';

// SharedModule
import { SharedModule } from '@src/shared/shared.module';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: GetCepRepository, useClass: CepFindDataRepository },
    { provide: HTTP_INTERCEPTORS, useClass: CepInterceptor, multi: true }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
