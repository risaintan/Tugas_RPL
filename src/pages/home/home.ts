import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { UtamaPage } from '../utama/utama';
import { PilihanPage } from '../pilihan/pilihan';
import { PenjualPage } from '../penjual/penjual';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  username:string;
  password:string;
  constructor(public navCtrl: NavController,public navParams: NavParams) {

  }


  login() {
    console.log("username: "+ this.username);

    console.log("Password: "+ this.password);  }

    onLoadPenjualPage(){
      this.navCtrl.push(PenjualPage);
    }
  
    onLoadRegisterPage(){
      this.navCtrl.push(RegisterPage);
     }

  onLoadutamaPage(){
    this.navCtrl.push(UtamaPage);
  }

  onLoadpilihan(){
    this.navCtrl.push(PilihanPage);
    }
}
