import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { UtamaPage } from '../utama/utama';
import { PilihanPage } from '../pilihan/pilihan';
import { FormpenjualPage } from '../formpenjual/formpenjual';

/**
 * Generated class for the PenjualPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
  selector: 'page-penjual',
  templateUrl: 'penjual.html',
})
export class PenjualPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  onLoadFormpenjualPage(){
    this.navCtrl.push(FormpenjualPage);
  }

  
  ionViewDidLoad() {
    console.log('ionViewDidLoad PenjualPage');
  }

}
