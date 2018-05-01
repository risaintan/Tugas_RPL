import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PenjualPage } from '../penjual/penjual';
import { RegisterPage } from '../register/register';

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
