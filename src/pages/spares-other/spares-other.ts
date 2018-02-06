import { Storage } from '@ionic/storage';

import { Http } from '@angular/http';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, LoadingController, ToastController } from 'ionic-angular';
import "rxjs/Rx";
/**
 * Generated class for the SparesOtherPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-spares-other',
  templateUrl: 'spares-other.html',
})
export class SparesOtherPage {
  customer_name:any;
  query:any;
  code1:any;
 
  constructor(public storage:Storage,public toastCtrl:ToastController,public loadingCtrl:LoadingController,public http:Http,public viewCtrl:ViewController,public navCtrl: NavController, public navParams: NavParams) {
    this.storage.get('company_name').then((val)=>{
    this.customer_name=val;
    this.query="";
  });
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SparesOtherPage');
  }
dismiss() {
    this.viewCtrl.dismiss();
  }
  send(){
      if(this.query==""){
    const toast = this.toastCtrl.create({
    message: 'Please Fill Details',
    duration: 3000,
    position: 'bottom'
  });
  toast.present();
      }else{
     const loading = this.loadingCtrl.create({
   // content: 'Please wait...',
    spinner:'crescent'
  });

  loading.present();
    let customer_name=this.customer_name;
    let query=this.query;

    let link="https://www.scantechlaser.com/Erp_service_app/send_spares_mail.php";
    let data=JSON.stringify({customer_name,query});
    this.http.post(link,data).map(res=>res.json()).subscribe((data)=>{
      loading.dismiss().then(()=>{
       this.code1=data.code;

         if(data.code=='true')
        {
     
          const toast = this.toastCtrl.create({
    message: 'Request send Successfully',
    duration: 3000,
    position: 'bottom'
  });
  toast.present();
   this.viewCtrl.dismiss();
     }
else{
  const toast = this.toastCtrl.create({
    message: 'failed to send request',
    duration: 3000,
    position: 'bottom'
  });
  toast.present();
  this.viewCtrl.dismiss();
}
      });
    
    })
  }
  }
}
