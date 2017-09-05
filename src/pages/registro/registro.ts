import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  templateUrl: 'registro.html',
})

export class RegistroPage {

  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistroPage');
  }

  private onClickRegistrar(): void {
    console.log("Regitrar clicked");
  }

}
