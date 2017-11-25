import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
    private iab: InAppBrowser) {

  }


  click(){
    this.iab.create('https://codepen.io/MadmonkeyStudio/pen/nCkwv');
  }

}
