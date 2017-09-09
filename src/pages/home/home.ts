import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { HttpProvider } from '../../providers/http/http.service';
import { LoginPage } from '../login/login';

@Component({
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    private httpProvider: HttpProvider
  ) {}

  public ionViewDidEnter(): void {
    console.log("ionViewDidEnter HomePage");
    this.httpProvider.getLogin()
    .then( response => console.log("HomePage getLogin ok") ) // pedir datos
    .catch( error => this.navCtrl.setRoot(LoginPage) );
  }

  public logout(): void {
    this.httpProvider.deleteLogin()
    .then( response => this.navCtrl.setRoot(LoginPage) )
    .catch( error => this.navCtrl.setRoot(LoginPage) );
  }

}
