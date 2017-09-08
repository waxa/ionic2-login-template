import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RegistroPage } from '../registro/registro';
import { HomePage } from '../home/home';

import { HttpProvider } from '../../providers/http/http.service';

@Component({
  templateUrl: 'login.html'
})

export class LoginPage {

  username: string;
  password: string;

  constructor(
    public navCtrl: NavController,
    private httpProvider: HttpProvider
  ) {}

  private isLoged(): void {
    console.log("isLoged");
    this.navCtrl.setRoot(HomePage);
  }

  public ionViewDidLoad(): void {
    console.log('ionViewDidLoad LoginPage');
  }

  public ionViewDidEnter(): void {
    console.log("ionViewDidEnter login");
    this.httpProvider.getLogin()
    .then( loged => this.isLoged() )
    .catch( error => console.log("ionViewDidEnter isLogedError", error) );
  }

  public onClickEntrar(): void {
    console.log("Entrar clicked", this.username, this.password);
    this.httpProvider.postLogin(this.username, this.password)
    .then( loged => this.isLoged() )
    .catch( error => console.log("ionViewDidEnter isLogedError", error) );
  }

  public onClickRegistrarse(): void {
    console.log("Registrarse clicked");
    this.navCtrl.push(RegistroPage);
  }

}
