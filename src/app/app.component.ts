import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Subscription } from 'rxjs/Subscription';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';

import { HttpProvider } from '../providers/http/http.service';

@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;
  showMenu: boolean = false;
  showMenuSubs: Subscription;
  pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    private httpProvider: HttpProvider
  ) {

    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Login', component: LoginPage }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
    console.log('MyApp initializeApp');
    this.showMenuSubs = this.httpProvider.getShowMenuSubj()
    .subscribe( showMenu => this.showMenu = showMenu );
  }

  public openPage(p): void {
    this.nav.setRoot(p);
  }
}
