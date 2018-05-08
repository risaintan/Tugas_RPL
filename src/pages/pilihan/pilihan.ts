import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PenjualPage } from '../penjual/penjual';
import { RegisterPage } from '../register/register';
import { Tempat1Page } from '../tempat1/tempat1';

/**
 * Generated class for the PilihanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pilihan',
  templateUrl: 'pilihan.html',
})
export class PilihanPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  onLoadTempat1Page(){
    this.navCtrl.push(Tempat1Page);
}

  onLoadPenjualPage(){
    this.navCtrl.push(PenjualPage);
  }

  onLoadRegisterPage(){
    this.navCtrl.push(RegisterPage);
   }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PilihanPage');
  }

}
