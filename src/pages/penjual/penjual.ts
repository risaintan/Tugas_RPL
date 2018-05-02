import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UtamaPage } from '../utama/utama';
import { PilihanPage } from '../pilihan/pilihan';

/**
 * Generated class for the PenjualPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-penjual',
  templateUrl: 'penjual.html',
})
export class PenjualPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  onLoadPilihanPage(){
    this.navCtrl.push(PilihanPage);
  }

  
  ionViewDidLoad() {
    console.log('ionViewDidLoad PenjualPage');
  }

}
