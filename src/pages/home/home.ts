import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { HttpProvider } from '../../providers/http/http.service';

@Component({
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    private httpProvider: HttpProvider
  ) {}

  public ionViewDidEnter(): void {
    console.log("ionViewDidEnter home");
    this.httpProvider.getLogin()
    .then( response => console.log("ionViewDidEnter home loged ok") )
    .catch( error => console.log("ionViewDidEnter home filoged not ok") );
  }

  public logout(): void {
    this.httpProvider.deleteLogin()
    .then( response => console.log("logout ok") )
    .catch( error => console.log("logout not ok") );
  }

}
