import { Http } from '@angular/http';
import { Storage } from '@ionic/storage';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ModalController } from 'ionic-angular';
import { SmartAudioProvider } from './../../providers/smart-audio/smart-audio';
import "rxjs/Rx";
/**
 * Generated class for the BreakdownPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-breakdown',
  templateUrl: 'breakdown.html',
})
export class BreakdownPage {
   email:any;
  response:any;
  keyword:any;
  code1:any;
   loading:any;
   isAudio:boolean;
  constructor(public modalCtrl:ModalController,public http:Http,public storage:Storage,public loadingCtrl:LoadingController,public smartAudio:SmartAudioProvider,public navCtrl: NavController, public navParams: NavParams) {
    storage.get('Audio').then((val) => {
    console.log('Audio Value', val);
    this.isAudio=val;
  });
    this.keyword="";
     this.loading = this.loadingCtrl.create({
   // content: 'Please wait...',
    spinner:'crescent'
  });

  this.loading.present();
   
 this.fetch_machine();
  }
 fetch_machine(){
    this.storage.get('company_name').then((val)=>{

  
    let customer_name=val;
    let key=this.keyword;
    let link="https://www.scantechlaser.com/Erp_service_app/fetch_machines.php";
    
    let data=JSON.stringify({customer_name,key});
   //  console.log("data",data);
    this.http.post(link,data).map(res=>res.json()).subscribe((data)=>{
      this.loading.dismiss().then(()=>{
           this.code1=data.code;
       this.response=data.res;
      //console.log(data);
      }) ;

    });
   })

  }
   selected(val){
  let response=val;
    let profileModal=this.modalCtrl.create("BreakdownFormPage",{response}, { cssClass: 'inset-modal' })
    profileModal.onDidDismiss(data => {
    if(this.isAudio==true){
     // console.log("asdasadasad");
    this.smartAudio.play('tabSwitch');
    }
   });       
    profileModal.present();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad BreakdownPage');
  }

}
