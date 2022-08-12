import { KeycloakService } from 'keycloak-angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular_Keycloak';
 kc:any;
constructor(private keycloakservices:KeycloakService){
this.kc=keycloakservices;
}
OnInit(){
  this.onLogin();
}
onLogout(){
  this.keycloakservices.logout();
}













}
