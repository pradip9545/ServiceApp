import { Http } from '@angular/http';
import { Storage } from '@ionic/storage';
import { Component } from '@angular/core';
import { SmartAudioProvider } from './../../providers/smart-audio/smart-audio';
import { IonicPage, NavController, NavParams, LoadingController, ModalController } from 'ionic-angular';
import "rxjs/Rx"

/**
 * Generated class for the MachineDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-machine-details',
  templateUrl: 'machine-details.html',
})
export class MachineDetailsPage {
  email:any;
  response:any;
  keyword:any;
  code1:any;
  loading:any;
  isAudio:boolean;
  constructor(public smartAudio:SmartAudioProvider,public modalCtrl:ModalController,public loadingCtrl:LoadingController,public http:Http,public storage:Storage,public navCtrl: NavController, public navParams: NavParams) {
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

  ionViewDidLoad() {
    console.log('ionViewDidLoad MachineDetailsPage');
     this.storage.set('currentPage', 'MachineDetailsPage');
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
     console.log("mukta",data);
      }) ;

    });
   })

  }
   other(){
     let response='dadad';
    let profileModal=this.modalCtrl.create("MachineDetailsOtherPage",{response}, { cssClass: 'inset-modal' })
    profileModal.onDidDismiss(data => {
    if(this.isAudio==true){
     // console.log("asdasadasad");
    this.smartAudio.play('tabSwitch');
    }
   });       
    profileModal.present();
  }
  current_machine(res){
    this.navCtrl.push("ViewMachinePage",{res});
  }
}
