import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormpenjualPage } from '../formpenjual/formpenjual';
import { ProfpenjualPage } from '../profpenjual/profpenjual';

/**
 * Generated class for the LoginjualPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-loginjual',
  templateUrl: 'loginjual.html',
})
export class LoginjualPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginjualPage');
  }
  onLoadFormpenjualPage(){
    this.navCtrl.push(FormpenjualPage);
  }
  onLoadupenjualPage(){
    this.navCtrl.setRoot(ProfpenjualPage);
  }

}
