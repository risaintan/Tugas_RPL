import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { RegisterPage } from '../pages/register/register';
import { UtamaPage } from '../pages/utama/utama';
import { PenjualPage } from '../pages/penjual/penjual';
import { PilihanPage } from '../pages/pilihan/pilihan';
import { ProfilePage } from '../pages/profile/profile';
import { Tempat1Page } from '../pages/tempat1/tempat1';
import { FormpenjualPage } from '../pages/formpenjual/formpenjual';
import { ProfpenjualPage } from '../pages/profpenjual/profpenjual';
import { Tempat3Page } from '../pages/tempat3/tempat3';
import { Tempat2Page } from '../pages/tempat2/tempat2';
import { T1toko1Page } from '../pages/t1toko1/t1toko1';
import { LoginbeliPage } from '../pages/loginbeli/loginbeli';
import { LoginjualPage } from '../pages/loginjual/loginjual';
import { HttpModule, Http } from '@angular/http';
import { IonicStorageModule } from '@ionic/storage';
import { Data } from '../provider/data';
import { EditprofPage } from '../pages/editprof/editprof';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RegisterPage,
    UtamaPage,
    PenjualPage,
    PilihanPage,
    ProfilePage,
    Tempat1Page,
    FormpenjualPage,
    ProfpenjualPage,
    Tempat2Page,
    Tempat3Page,
    T1toko1Page,
    LoginbeliPage,
    LoginjualPage,
    EditprofPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    IonicStorageModule.forRoot()

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RegisterPage,
    UtamaPage,
    PenjualPage,
    PilihanPage,
    ProfilePage,
    Tempat1Page,
    FormpenjualPage,
    ProfpenjualPage,
    Tempat2Page,
    Tempat3Page,
    T1toko1Page,
    LoginbeliPage,
    LoginjualPage,
    EditprofPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Data
  ]
})
export class AppModule {}
