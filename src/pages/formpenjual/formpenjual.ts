import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProfpenjualPage } from '../profpenjual/profpenjual';

/**
 * Generated class for the FormpenjualPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-formpenjual',
  templateUrl: 'formpenjual.html',
})
export class FormpenjualPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  onLoadProfpenjualPage(){
    this.navCtrl.push(ProfpenjualPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FormpenjualPage');
  }

}
