import { Component } from '@angular/core';
import { Data } from '../../provider/data';
import { Http } from '@angular/http';
import { NavController, NavParams, MenuController, LoadingController, AlertController } from 'ionic-angular';
import { EditprofPage } from '../editprof/editprof';
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  nama:any;
  telepon:any;
  username:any;
  userData:any;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private data : Data,
    public loadCtrl: LoadingController,
    public alertCtrl: AlertController,
    public http: Http) {
    this.data.getData().then((data) =>
    {
      console.log(data);
      this.userData = data;
      this.nama = data.nama;
      this.telepon = data.telepon;
      this.username = data.username;
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }
  onLoadProfilPage(){
    this.navCtrl.push(EditprofPage);
  }
}
