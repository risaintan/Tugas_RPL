import { Component } from '@angular/core';
import { NavController, NavParams, MenuController, LoadingController, AlertController } from 'ionic-angular';
import { FormpenjualPage } from '../formpenjual/formpenjual';
import { ProfpenjualPage } from '../profpenjual/profpenjual';
import { Data } from '../../provider/data';
import { Http } from '@angular/http';


@Component({
  selector: 'page-loginjual',
  templateUrl: 'loginjual.html',
})
export class LoginjualPage {
    email:any;
    password:any;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public menuCtrl: MenuController,
    private data : Data,
    public loadCtrl: LoadingController,
    public alertCtrl: AlertController,
    public http: Http) {
      this.testApi();
  }
  login() {
    console.log("Email: "+ this.email);

    console.log("Password: "+ this.password);  }

  
  onLoadFormpenjualPage(){
    this.navCtrl.push(FormpenjualPage);
  }
  onLoadupenjualPage(){
    if(this.email && this.password){
      let loading = this.loadCtrl.create({
        content: 'memuat..'
      });

      loading.present();
      let input = {
        email: this.email, 
        password: this.password
      };
      console.log(input);
      this.http.post(this.data.BASE_URL+"/login_penjual.php",input).subscribe(data => {
      let response = data.json();
      console.log(response); 
      if(response.status==200){    
        this.data.logout();
        
        this.data.login(response.data,"user");//ke lokal
        
        this.navCtrl.setRoot(ProfpenjualPage);
        loading.dismiss();
      }
      else {
        loading.dismiss();
          let alert = this.alertCtrl.create({
            title: 'Login Failed',      
            message : 'please try again',
            buttons: ['OK']
          });
          alert.present();
          
      }    
      });
      //apiPost    
    }
  }
  testApi(){
    //api
    this.http.get("http://localhost/backend/db_connect.php").subscribe(data => {
      console.log(data); 
    });
    //api     
  }
}
