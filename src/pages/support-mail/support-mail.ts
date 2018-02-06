import { Http } from '@angular/http';
import { Storage } from '@ionic/storage';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import "rxjs/Rx";
/**
 * Generated class for the SupportMailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-support-mail',
  templateUrl: 'support-mail.html',
})
export class SupportMailPage {
 response:any;
 email_response:any;
  constructor(public http:Http,public storage:Storage,public navCtrl: NavController, public navParams: NavParams,public viewCtrl:ViewController) {
   this.response=this.navParams.get('response');
 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SupportMailPage');
  }
dismiss() {
    this.viewCtrl.dismiss();
  }

  mail(res){
   // console.log(res);
   this.storage.get('serviceemail').then((client_email)=>{
     this.navCtrl.push("EmailPage",{res,client_email});
    this.viewCtrl.dismiss();
   })
   
    
  }
}
