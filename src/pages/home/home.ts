import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { UtamaPage } from '../utama/utama';
import { PilihanPage } from '../pilihan/pilihan';
import { PenjualPage } from '../penjual/penjual';
import { LoginbeliPage } from '../loginbeli/loginbeli';
import { FormpenjualPage } from '../formpenjual/formpenjual';
import { LoginjualPage } from '../loginjual/loginjual';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  username:string;
  password:string;
  constructor(public navCtrl: NavController) {

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
    this.navCtrl.setRoot(UtamaPage);
  }

  onLoadpilihan(){
    this.navCtrl.push(PilihanPage);
    }

  onLoadbeliPage(){
    this.navCtrl.push(LoginbeliPage);
  }

  onLoadFormpenjualPage(){
    this.navCtrl.push(FormpenjualPage);
  }

  onLoadjualPage(){
    this.navCtrl.push(LoginjualPage); }

}
