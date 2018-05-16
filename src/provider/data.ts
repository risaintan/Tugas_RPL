import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';

@Injectable()
export class Data {
  public BASE_URL = 'http://localhost/backend';

  public HAS_LOGGED_IN = 'status_login';
  
  constructor(public http: Http,
            public storage: Storage
        ) {
    
  }

  login(data : any,role:string) {
    this.storage.set(this.HAS_LOGGED_IN, true);
    this.storage.set('user_pembeli', data);
  };
  
  logout() {
    this.storage.remove(this.HAS_LOGGED_IN);
    this.storage.remove('user_pembeli');
  };

  isLogin(){
    return this.storage.get(this.HAS_LOGGED_IN).then((value)=>{
      return value;
    });
  }


  getData() {
    return this.storage.get('user_pembeli').then((value) => {
      return value;
    });
  }

}