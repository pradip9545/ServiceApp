import { Http } from '@angular/http';
import { Storage } from '@ionic/storage';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ModalController, LoadingController } from 'ionic-angular';
import "rxjs/Rx"
import { InAppBrowser } from '@ionic-native/in-app-browser';
/**
 * Generated class for the SupportPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-support',
  templateUrl: 'support.html',
  providers:[InAppBrowser]
})
export class SupportPage {
  email:any;
  response:any;
  mobile:any;
  constructor(public loadingCtrl:LoadingController,public iab: InAppBrowser,public modalCtrl:ModalController,public alertCtrl:AlertController,public http:Http,public navCtrl: NavController, public navParams: NavParams,public storage:Storage) {
  this.fetch_details();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SupportPage');
  }
  fetch_details(){
    const loading = this.loadingCtrl.create({
    content: '',
    spinner:'crescent'
  });

  loading.present();
   this.storage.get('serviceemail').then((val)=>{
     this.email=val;
      
        let data=JSON.stringify({"client_email":this.email});
        let link="https://www.scantechlaser.com/Service_App/scantech_machine.php";
        this.http.post(link,data).map(res=>res.json()).subscribe((data)=>{
          loading.dismiss().then(()=>{
                 this.response=data.res;
                 console.log(this.response);
          })
       
        })
   }) 
  }

  call() {
    let response=this.response;
    this.modalCtrl.create("SupportCallPage",{response}, { cssClass: 'inset-modal' })
                  .present();
  }
mail(){
 let response=this.response;
    this.modalCtrl.create("SupportMailPage",{response}, { cssClass: 'inset-modal' })
                  .present();
}
                fb(){
    const browser = this.iab.create('https://www.facebook.com/Scantech.Laser/');
   // browser.close();
  }
   twiter(){
    const browser = this.iab.create('https://twitter.com/scantechlaser/');
   // browser.close();
  }
    youtube(){
    const browser = this.iab.create('https://www.youtube.com/user/scantechlaser/videos/');
   // browser.close();
  }
    linkdin(){
    const browser = this.iab.create('https://www.linkedin.com/company/scantech-laser-pvt-ltd/');
   // browser.close();
  }
    google(){
    const browser = this.iab.create('https://plus.google.com/+Scantechlaser/');
   // browser.close();
  }
}
