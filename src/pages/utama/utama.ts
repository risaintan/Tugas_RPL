import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
import { Tempat1Page } from '../tempat1/tempat1';
import { Tempat2Page } from '../tempat2/tempat2';
import { Tempat3Page } from '../tempat3/tempat3';

/**
 * Generated class for the UtamaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 
@Component({
  selector: 'page-utama',
  templateUrl: 'utama.html',
})
export class UtamaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  onLoadprofilePage(){
    this.navCtrl.push(ProfilePage);
  }

  onLoadtempat1Page(){
    this.navCtrl.push(Tempat1Page);
  }

  onLoadtempat2Page(){
    this.navCtrl.push(Tempat2Page);
  }

  onLoadtempat3Page(){
    this.navCtrl.push(Tempat3Page);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad UtamaPage');
  }

}
