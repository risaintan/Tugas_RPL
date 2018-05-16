import { Component } from '@angular/core';
import { RegisterPage } from '../register/register';
import { UtamaPage } from '../utama/utama';
import { NavController, NavParams, MenuController, LoadingController, AlertController } from 'ionic-angular';
import { Data } from '../../provider/data';
import { Http } from '@angular/http';

@Component({
  selector: 'page-loginbeli',
  templateUrl: 'loginbeli.html',
})
export class LoginbeliPage {
  email:any;
  password:any;

  constructor( public navCtrl: NavController, 
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


    onLoadRegisterPage(){
      this.navCtrl.push(RegisterPage);
     }

  onLoadutamaPage(){
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
      this.http.post(this.data.BASE_URL+"/login_pembeli.php",input).subscribe(data => {
      let response = data.json();
      console.log(response); 
      if(response.status==200){    
        this.data.logout();
        
        this.data.login(response.data,"user");//ke lokal
        
        this.navCtrl.setRoot(UtamaPage);
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


  onLoadbeliPage(){
    this.navCtrl.push(LoginbeliPage);
  }
  testApi(){
    //api
    this.http.get("http://localhost/backend/db_connect.php").subscribe(data => {
      console.log(data); 
    });
    //api     
  }
}


