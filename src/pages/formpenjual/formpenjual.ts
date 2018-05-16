import { Component } from '@angular/core';
import { ProfpenjualPage } from '../profpenjual/profpenjual';
import { NavController, NavParams, MenuController, LoadingController, AlertController } from 'ionic-angular';
import { Data } from '../../provider/data';
import { Http } from '@angular/http';


@Component({
  selector: 'page-formpenjual',
  templateUrl: 'formpenjual.html',
})

export class FormpenjualPage {
  email:any;
  password:any;
  nama_owner:any;
  nama_toko:any;
  kontak:any;
  alamat_toko:any;
  nama_tempat:any;
  status_toko:any;
  menu_toko:any;

 
 


  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public menuCtrl: MenuController,
    private data : Data,
    public loadCtrl: LoadingController,
    public alertCtrl: AlertController,
    public http: Http) {
  }

  onLoadProfpenjualPage(){
    if(this.nama_owner && this.email && this.nama_toko && this.kontak && this.alamat_toko && this.nama_tempat && this.status_toko && this.menu_toko && this.password) {
  
      let loading = this.loadCtrl.create({
        content: 'memuat..'
      });

      loading.present();

      //apiPost
      let input = {
        nama_owner :this.nama_owner,
        email: this.email, 
        nama_toko: this.nama_toko,
        kontak: this.kontak,
        alamat_toko: this.alamat_toko,
        nama_tempat: this.nama_tempat,
        status_toko: this.status_toko,
        menu_toko: this.menu_toko,
        password: this.password
      };

      console.log(input);
      this.http.post(this.data.BASE_URL+"/register_penjual.php",input).subscribe(data => {
      let response = data.json();
      console.log(response); 
      if(response.status==200){    
        this.data.logout();
        
        this.data.login(response.data,"user");//ke lokal
        
        this.navCtrl.setRoot(ProfpenjualPage);      
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
