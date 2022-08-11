import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {Injectable} from  '@angular/core';
import{KeycloakInstance}from"keycloak-js" ;

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { NavbarComponent } from './navbar/navbar.component';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { HttpClientModule } from '@angular/common/http';


function initializeKeycloak(keycloak: KeycloakService) {
  return () =>
      keycloak.init({
      config: {
        url: 'http://localhost:8080/',
        realm: 'ecom-app',
        clientId: 'angularApp',
      },
      initOptions: {
        onLoad: 'login-required',  // allowed values 'login-required', 'check-sso';
        flow: "standard"          // allowed values 'standard', 'implicit', 'hybrid';
      },
    });
}


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    NavbarComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule ,
    KeycloakAngularModule,

  ],
  providers: [
   {provide:APP_INITIALIZER,
    deps:[KeycloakService],
    useFactory:initializeKeycloak,
    multi:true}


  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
