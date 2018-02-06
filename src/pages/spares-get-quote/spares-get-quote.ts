
import { Storage } from '@ionic/storage';
import { Http } from '@angular/http';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, LoadingController, ToastController } from 'ionic-angular';
import "rxjs/Rx";
/**
 * Generated class for the SparesGetQuotePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-spares-get-quote',
  templateUrl: 'spares-get-quote.html',
})
export class SparesGetQuotePage {
  mydata:any;
  item_code:any;
  item_name:any;
  item_price:any;
  response:any;
  
  constructor(public toastCtrl:ToastController,public storage:Storage,public loadingCtrl:LoadingController,public http:Http,public viewCtrl:ViewController,public navCtrl: NavController, public navParams: NavParams) {
    this.mydata=this.navParams.get('response1');
    console.log("zx",this.mydata);
    this.item_code=this.mydata.item_code;
    this.item_name=this.mydata.item_name;
    this.item_price=this.mydata.rate;
  
  }
dismiss() {
    this.viewCtrl.dismiss();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SparesGetQuotePage');
  }
send(){
  let loading = this.loadingCtrl.create({
    content: '',
    spinner:'crescent'
  });

  loading.present();
  this.storage.get('company_name').then((val)=>{

 
  let item_code=this.item_code;
  let item_name=this.item_name;
  let item_price=this.item_price;
  let company_name=val;
  let data=JSON.stringify({item_code,item_name,item_price,company_name});
  let link="https://www.scantechlaser.com/Erp_service_app/get_spares_quote.php";
 // console.log("Dataaa",data);
  this.http.post(link,data).map(res=>res.json()).subscribe((data)=>{
    loading.dismiss().then(()=>{
  //  this.response=data.code;
     if(data.code=='true'){
    
      let toast = this.toastCtrl.create({
    message: 'Your request will serve as soon as possible, Thank you !',
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
