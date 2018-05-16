import { Component } from '@angular/core';
import { NavController, NavParams, MenuController, LoadingController, AlertController } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
import { Tempat1Page } from '../tempat1/tempat1';
import { Tempat2Page } from '../tempat2/tempat2';
import { Tempat3Page } from '../tempat3/tempat3';
import { Data } from '../../provider/data';
import { Http } from '@angular/http';




 
@Component({
  selector: 'page-utama',
  templateUrl: 'utama.html',
})
export class UtamaPage {


  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private data : Data,
    public loadCtrl: LoadingController,
    public alertCtrl: AlertController,
    public http: Http) {

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
