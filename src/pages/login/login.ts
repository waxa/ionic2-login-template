import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RegistroPage } from '../registro/registro';

@Component({
  templateUrl: 'login.html'
})

export class LoginPage {

  constructor(
    public navCtrl: NavController
  ) {}

  private ionViewDidLoad(): void {
    console.log('ionViewDidLoad LoginPage');
  }

  private onClickEntrar(): void {
    console.log("Entrar clicked");
  }

  private onClickRegistrarse(): void {
    console.log("Registrarse clicked");
    this.navCtrl.push(RegistroPage);
  }

}
