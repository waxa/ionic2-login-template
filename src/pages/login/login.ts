import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RegistroPage } from '../registro/registro';

import { HttpProvider } from '../../providers/http/http.service';

@Component({
  templateUrl: 'login.html'
})

export class LoginPage {

  constructor(
    public navCtrl: NavController,
    private httpProvider: HttpProvider
  ) {}

  public ionViewDidLoad(): void {
    console.log('ionViewDidLoad LoginPage');
    this.httpProvider.getUsers()
      .then( users => console.log(users) )
      .catch( error => console.log(error) );
  }

  public onClickEntrar(): void {
    console.log("Entrar clicked");
  }

  public onClickRegistrarse(): void {
    console.log("Registrarse clicked");
    this.navCtrl.push(RegistroPage);
  }

}
