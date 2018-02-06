import { Storage } from '@ionic/storage';
import { Http } from '@angular/http';
import { Component} from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ModalController } from 'ionic-angular';
import "rxjs/Rx";
import { SmartAudioProvider } from './../../providers/smart-audio/smart-audio';
/**
 * Generated class for the SparesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-spares',
  templateUrl: 'spares.html',
})
export class SparesPage {
  response:any;
  keyword:any;
  code1:any;
  loading:any;
  isAudio:boolean;
  constructor(public smartAudio:SmartAudioProvider,public storage:Storage,public modalCtrl:ModalController,public loadingCtrl:LoadingController,public http:Http,public navCtrl: NavController, public navParams: NavParams) {
       storage.get('Audio').then((val) => {
    console.log('Audio Value', val);
    this.isAudio=val;
  }); 
    
    this.loading = this.loadingCtrl.create({
   // content: 'Please wait...',
    spinner:'crescent'
  });

  this.loading.present();
  
    this.myfunction();
 
    
  }
  
   myfunction(){
     
    this.storage.get('company_name').then((val)=>{
    let customer_name=val;
    let key=this.keyword;
    let link="https://www.scantechlaser.com/Erp_service_app/fetch_spares.php";
    let data=JSON.stringify({customer_name,key});
    this.http.post(link,data).map(res=>res.json()).subscribe((data)=>{
       this.loading.dismiss().then(()=>{
         this.code1=data.code;
       this.response=data.res;
     console.log(data);
       })
      
      }) 
     });
  
   }
  other(){
     let response='dadad';
    let profileModal=this.modalCtrl.create("SparesOtherPage",{response}, { cssClass: 'inset-modal' })
     profileModal.onDidDismiss(data => {
       if(this.isAudio==true){
     // console.log("asdasadasad");
    this.smartAudio.play('tabSwitch');
    }
   });              
    profileModal.present();
  }
  current_spare(val)
  {
   console.log(val);
   let response1=val;
    let profileModal=this.modalCtrl.create("SparesGetQuotePage",{response1}, { cssClass: 'inset-modal' })
     profileModal.onDidDismiss(data => {
     if(this.isAudio==true){
     // console.log("asdasadasad");
    this.smartAudio.play('tabSwitch');
    }
   });             
    profileModal.present();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SparesPage');
  }
 
}
