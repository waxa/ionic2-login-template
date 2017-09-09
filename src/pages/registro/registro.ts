import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { HttpProvider } from '../../providers/http/http.service';

@Component({
  templateUrl: 'registro.html'
})

export class RegistroPage {

  username: string;
  password: string;

  constructor(public navCtrl: NavController, private httpProvider: HttpProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistroPage');
  }

  public onClickRegistrar(): void {
    this.httpProvider.postUsers(this.username, this.password)
    .then( response => {
      if (response) {
        this.navCtrl.pop();
      } else {
        alert("Error");
      }
    })
    .catch( error => console.log("RegistroPage postUsers error") );
  }

}
