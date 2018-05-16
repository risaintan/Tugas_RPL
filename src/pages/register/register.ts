import { Component } from '@angular/core';
import { UtamaPage } from '../utama/utama';
import { NavController, NavParams, MenuController, LoadingController, AlertController } from 'ionic-angular';
import { Data } from '../../provider/data';
import { Http } from '@angular/http';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})

export class RegisterPage {
  email:any;
  password:any;
  nama:any;
  username:any;
  telepon:any;



  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public menuCtrl: MenuController,
    private data : Data,
    public loadCtrl: LoadingController,
    public alertCtrl: AlertController,
    public http: Http) {
     
  }

  onLoadUtamaPage(){
      if(this.nama && this.email && this.password && this.username && this.telepon) {
  
        let loading = this.loadCtrl.create({
          content: 'memuat..'
        });
  
        loading.present();
  
        //apiPost
        let input = {
          nama :this.nama,
          email: this.email, 
          username: this.username,
          password: this.password,
          telepon: this.telepon
        };
        console.log(input);
        this.http.post(this.data.BASE_URL+"/register_pembeli.php",input).subscribe(data => {
        let response = data.json();
        console.log(response); 
        if(response.status==200){    
          this.data.logout();
          
          this.data.login(response.data,"user");//ke lokal
          
          this.navCtrl.setRoot(UtamaPage);      
          loading.dismiss();
        }
        else if(response.status==401) {
          loading.dismiss();
            let alert = this.alertCtrl.create({
              title: 'Email Already Taken',      
              buttons: ['OK']
            });
            alert.present();
            loading.dismiss();
        }
        else {
          loading.dismiss();
            let alert = this.alertCtrl.create({
              title: 'Failed Creating New Account',      
              buttons: ['OK']
            });
            alert.present();      
            loading.dismiss();
        }    
        });
        //apiPost  
      }
    }
}

