import { Http } from '@angular/http';
import { Storage } from '@ionic/storage';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, LoadingController, ToastController } from 'ionic-angular';
import "rxjs/Rx";
/**
 * Generated class for the BreakdownFormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-breakdown-form',
  templateUrl: 'breakdown-form.html',
})
export class BreakdownFormPage {
  mydetails:any;
  machine_name:any;
  machine_code:any;
  item_price:any;
  message:any;
  constructor(public toastCtrl:ToastController,public http:Http,public storage:Storage,public loadingCtrl:LoadingController,public viewCtrl:ViewController,public navCtrl: NavController, public navParams: NavParams) {
  this.mydetails=this.navParams.get('response');
  console.log(this.mydetails);
  this.machine_name=this.mydetails.item_name;
  this.machine_code=this.mydetails.item_code;
  this.item_price=this.mydetails.rate;
  this.message="";
  }
 dismiss() {
    this.viewCtrl.dismiss();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad BreakdownFormPage');
  }
  get(){
     let loading = this.loadingCtrl.create({
    content: '',
    spinner:'crescent'
  });

  loading.present();
  this.storage.get('company_name').then((val)=>{

 
  let item_code=this.machine_code;
  let item_name=this.machine_name;
  let item_price=this.item_price;
  let company_name=val;
  let message1=this.message;
  let data=JSON.stringify({item_code,item_name,item_price,company_name,message1});
  let link="https://www.scantechlaser.com/Erp_service_app/breakdown.php";
 //  console.log("Dataaa",data);
  this.http.post(link,data).map(res=>res.json()).subscribe((data)=>{
    loading.dismiss().then(()=>{
  //  this.response=data.code;
     if(data.code=='true'){
    
      let toast = this.toastCtrl.create({
    message: 'Your request has been taken, Our team will contact you within 24 hrs',
    duration: 3000,
    position: 'bottom'
  });
   toast.present();
    this.viewCtrl.dismiss();
   }
else{
     let toast = this.toastCtrl.create({
    message: 'Something went wrong',
    duration: 3000,
    position: 'bottom'
  });
   toast.present();
    this.viewCtrl.dismiss();
}
    });
  
  });

   })
  }
}
