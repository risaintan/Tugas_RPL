import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { UtamaPage } from '../utama/utama';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  onLoadUtamaPage(){
    this.navCtrl.push(UtamaPage);
}

}
