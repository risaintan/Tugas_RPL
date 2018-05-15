import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { UtamaPage } from '../utama/utama';

@Component({
  selector: 'page-loginbeli',
  templateUrl: 'loginbeli.html',
})
export class LoginbeliPage {
  username:string;
  password:string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  login() {
    console.log("username: "+ this.username);

    console.log("Password: "+ this.password);  }


    onLoadRegisterPage(){
      this.navCtrl.push(RegisterPage);
     }

  onLoadutamaPage(){
    this.navCtrl.setRoot(UtamaPage);
  }


  onLoadbeliPage(){
    this.navCtrl.push(LoginbeliPage);
  }
   
}


