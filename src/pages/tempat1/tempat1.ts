import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { T1toko1Page } from '../t1toko1/t1toko1';

/**
 * Generated class for the Tempat1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tempat1',
  templateUrl: 'tempat1.html',
})
export class Tempat1Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  onLoadt1toko1Page(){
    this.navCtrl.push(T1toko1Page);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Tempat1Page');
  }

}
