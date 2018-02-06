import { Component } from '@angular/core';
import { MenuController,IonicPage, NavController, NavParams ,LoadingController,AlertController,ToastController} from 'ionic-angular';
import {Http} from "@angular/http";
import "rxjs/Rx";
import {HomePage} from '../home/home';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
 
})
export class LoginPage {
  username:any;
  password:any;
  response:any;
  company_name:any;
  constructor(public menuCtrl:MenuController,public storage: Storage,public toastCtrl:ToastController,public alertCtrl:AlertController,public loadingCtrl:LoadingController,public navCtrl: NavController, public navParams: NavParams,public http:Http) {
    this.username="";
    this.password="";
    menuCtrl.enable(false)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
login(){
  let username=this.username;
  let password=this.password;
  console.log("test",username,password);
  if(this.username=="" || this.password==""){
   let  toast = this.toastCtrl.create({
    message: 'Please fill out all details',
    duration: 3000,
    position: 'top'
  });
  toast.present();

  }else{
  const loading = this.loadingCtrl.create({
    content: '',
    spinner:'crescent'
  });

  loading.present();
  let link="https://www.scantechlaser.com/Erp_service_app/app_login.php";
  let data=JSON.stringify({"username":this.username,"password":this.password});
  this.http.post(link,data).map(res=>res.json()).subscribe((data)=>{
    loading.dismiss().then(()=>{
      console.log(data.res);
      this.response=data.res;
      this.company_name=this.response[0].company_name;
      console.log("email",this.company_name);
      this.storage.set('company_name', this.company_name);
      this.storage.set('isLoggedIn','true');
      const alert = this.alertCtrl.create({
    title: this.response[0].message,
    // subTitle: '10% of battery remaining',
    buttons:[{
        text: 'Ok',
        role: 'cancel',
        handler: () => {
         if(this.response[0].code=='true'){
            this.navCtrl.setRoot(HomePage);
         }
          
        }
      }]
  });
    
  alert.present();
    })
  
  })
  }
}
forgot(){
  this.navCtrl.push("ForgotPasswordPage");
}
}
