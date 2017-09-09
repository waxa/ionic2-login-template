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
    this.navCtrl.setRoot(HomePage);
  }

  public ionViewDidEnter(): void {
    console.log("ionViewDidEnter LoginPage");
    this.httpProvider.getLogin()
    .then( loged => this.isLoged() )
    .catch( error => console.log("LoginPage getLogin error") );
  }

  public onClickEntrar(): void {
    this.httpProvider.postLogin(this.username, this.password)
    .then( loged => this.isLoged() )
    .catch( error => console.log("LoginPage postLogin error") );
  }

  public onClickRegistrarse(): void {
    this.navCtrl.push(RegistroPage);
  }

}
