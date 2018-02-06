import { SmartAudioProvider } from './../../providers/smart-audio/smart-audio';
import { Http } from '@angular/http';
import { Component } from '@angular/core';
import { NavController, ModalController, MenuController, AlertController, ToastController, LoadingController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import "rxjs/Rx";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers:[InAppBrowser]
})
export class HomePage {
  email:any;
  response:any;
  isToggled:boolean;
  isAudio:boolean;
  company_name:any;
  constructor(public loadingCtrl:LoadingController,public toastCtrl:ToastController,public alertCtrl:AlertController,public smartAudio:SmartAudioProvider,public menuController:MenuController,public modalCtrl:ModalController,public http:Http,public iab: InAppBrowser,public storage:Storage,public navCtrl: NavController) {
       storage.get('toggle').then((val) => {
    
    this.isToggled=val;
    console.log('Toggle Value', this.isToggled);
  });
    storage.get('Audio').then((val) => {
    console.log('Audio Value', val);
    this.isAudio=val;
  });
    menuController.enable(true)  ; 
       storage.get('company_name').then((val) => {
    
    this.company_name=val;
    //console.log('Comapny Name', this.company_name);
     let company_name= this.company_name;
     let data=JSON.stringify({company_name});
     console.log("xcv",data);
    let link="https://www.scantechlaser.com/Erp_service_app/check_change_status.php";
    this.http.post(link,data).map(res=>res.json()).subscribe((data)=>{
      console.log('dasdadadadad',data);
      if(data.code=='true')
        {
         this.myAlert();
        }
    })
  });
    
   
    
  }
myAlert(){
     let prompt = this.alertCtrl.create({
      title: 'Change Password!',
      message: "Change password for security perpose for that enter your registered Email",
      inputs: [
        {
          name: 'email',
          placeholder: 'Email',
          
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Ok',
          handler: data => {
           // console.log('Saved clicked',data);
          //  console.log("dadta",data.email);
            this.email=data.email;
            this.myEmailHandler()
          }
        }
      ]
    });
    prompt.present();
  }
  myEmailHandler(){
    if(this.email=='')
      {
    let toast = this.toastCtrl.create({
    message: 'Please Enter your email first',
    duration: 3000,
    position: 'bottom'
  });
   toast.present();
      }else{

         let loading = this.loadingCtrl.create({
    content: '',
    spinner:'crescent'
  });

  loading.present();
     this.storage.get('company_name').then((val) => {
    let email=this.email;
    let company_name=val;
    let randnum=Math.floor(Math.random()*((100 - 1 + 1)) + 1);
    let data=JSON.stringify({email,randnum,company_name});
   console.log(data);
    let link="https://www.scantechlaser.com/Erp_service_app/change_pass.php";
    this.http.post(link,data).map(res=>res.json()).subscribe(data=>{
     loading.dismiss().then(()=>{
      this.response=data.code;
     
      let toast = this.toastCtrl.create({
    message: 'Please Check your mail for further verification..',
    duration: 3000,
    position: 'bottom'
  });
  toast.present();
  this.navCtrl.setRoot("LoginPage");
     })
    })
      });

  }
  }
  machine_details(){
    this.navCtrl.push("MachineDetailsPage");
    console.log(this.isAudio);
    // if(this.isAudio==true){
    // this.smartAudio.play('tabSwitch');
    // }
  }
  // support(){
  //   this.navCtrl.push("SupportPage");
  // }
  fb(){
      if(this.isAudio==true){
    this.smartAudio.play('tabSwitch');
    }
    if(this.isToggled==true)
      {
        console.log('Enter');
     
    const browser = this.iab.create('https://www.facebook.com/Scantech.Laser/');
      } 
     else{
       console.log('Entesdr');
       this.smartAudio.play('tabSwitch');
      //  window.open("https://www.google.co.in/", "_blank");
      window.location.href = 'https://www.facebook.com/Scantech.Laser/';
      }
   // browser.close();
  }
   twiter(){
       if(this.isAudio==true){
    this.smartAudio.play('tabSwitch');
    }
      if(this.isToggled==true)
      {
        
    const browser = this.iab.create('https://twitter.com/scantechlaser/');
      }
   else{
    
       window.location.href = 'https://twitter.com/scantechlaser/';
      }
   // browser.close();
  }
    youtube(){
        if(this.isAudio==true){
    this.smartAudio.play('tabSwitch');
    }
       if(this.isToggled==true)
      {
        
    const browser = this.iab.create('https://www.youtube.com/user/scantechlaser/videos/');
      }
   else{
     
        window.location.href = 'https://www.youtube.com/user/scantechlaser/videos/';
      }
//browser.close();
  }
    linkdin(){
        if(this.isAudio==true){
    this.smartAudio.play('tabSwitch');
    }
       if(this.isToggled==true)
      {
       
    const browser = this.iab.create('https://www.linkedin.com/company/scantech-laser-pvt-ltd/');
      }
   else{
    
      window.location.href = 'https://www.linkedin.com/company/scantech-laser-pvt-ltd/';
      }
   // browser.close();
  }
    google(){
        if(this.isAudio==true){
    this.smartAudio.play('tabSwitch');
    }
       if(this.isToggled==true)
      {
        
    const browser = this.iab.create('https://plus.google.com/+Scantechlaser/');
      }
   else{
   
     window.location.href = 'https://plus.google.com/+Scantechlaser/';
      }
//browser.close();
  }
 web(){
     if(this.isAudio==true){
    this.smartAudio.play('tabSwitch');
    }
    if(this.isToggled==true)
      {
      
    const browser = this.iab.create('https://www.scantechlaser.com/');
      }
   else{
     
       window.location.href = 'https://www.scantechlaser.com/';
      }
 }  
//   mail(){
//  let response=this.response;
//     this.modalCtrl.create("SupportMailPage",{response}, { cssClass: 'inset-modal' })
//                   .present();
// }
spares(){
  this.navCtrl.push("SparesPage");
}
training(){
  this.navCtrl.push("TraininghomePage");
}
breakdown(){
  this.navCtrl.push("BreakdownPage");
}
 ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
   this.storage.set('currentPage', 'HomePage');
  }
}
