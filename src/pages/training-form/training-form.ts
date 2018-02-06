import { Http } from '@angular/http';
import { Storage } from '@ionic/storage';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ToastController, LoadingController } from 'ionic-angular';
import "rxjs/Rx";
/**
 * Generated class for the TrainingFormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-training-form',
  templateUrl: 'training-form.html',
})
export class TrainingFormPage {
  mydetails:any;
  item_name:any;
  no_of_person:any;
  email:any;
  constructor(public loadingCtrl:LoadingController,public http:Http,public storage:Storage,public toastCtrl:ToastController,public viewCtrl:ViewController,public navCtrl: NavController, public navParams: NavParams) {
  this.mydetails=this.navParams.get('response');
  this.item_name=this.mydetails.item_name;
  this.no_of_person="";
  this.email="";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TrainingFormPage');
  }
 dismiss() {
    this.viewCtrl.dismiss();
  }
  get(){

    if(this.no_of_person=="")
      {
        let toast = this.toastCtrl.create({
    message: 'Please Fill All details',
    duration: 3000,
    position: 'bottom'
  });
   toast.present();
      }
  else{
      let loading = this.loadingCtrl.create({
    content: '',
    spinner:'crescent'
  });

  loading.present();
    this.storage.get('company_name').then((val)=>{
      let no_of_person=this.no_of_person;
    let item_name=this.mydetails.item_name;
    let item_code=this.mydetails.item_code;
    let company_name=val;
    let email=this.email;
    let link="https://www.scantechlaser.com/Erp_service_app/training.php";
    let data=JSON.stringify({no_of_person,item_name,item_code,company_name,email});
    this.http.post(link,data).map(res=>res.json()).subscribe((data)=>{
      loading.dismiss().then(()=>{
    console.log("code",data.res.code);
    if(data.res.code=='true'){
    
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
    console.log(data);
    });
   
    }
  }
}
