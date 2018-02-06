import { Http } from '@angular/http';
import { SmartAudioProvider } from '../providers/smart-audio/smart-audio';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { Storage } from '@ionic/storage';
import "rxjs/Rx";
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, AlertController,Events } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Diagnostic } from '@ionic-native/diagnostic';
import { Network } from '@ionic-native/network';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

@Component({
  templateUrl: 'app.html',
  providers:[InAppBrowser,SmartAudioProvider]
  
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  response:any;
  rootPage: any;
  isToggled:boolean;
 pages: Array<any>;
  alert:any;
   backAlert:any;
   email:any;
  constructor(public events:Events,public http:Http,public iab:InAppBrowser,public network:Network,public diagnostic:Diagnostic,public alertCtrl:AlertController,public storage:Storage,public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen,public smartAudio: SmartAudioProvider) {
    this.initializeApp();
    //  storage.get('toggle').then((val) => {
      
    //  this.isToggled=val;
   // console.log('Toggle Value', this.isToggled);
 // });
    this.isToggled=true;
    this.storage.set('toggle', true);
    this.events.subscribe('toggle',(val)=>{
      this.isToggled=val;
      console.log('Pradip value', this.isToggled);
      });
    // used for an example of ngFor and navigation
    // this.pages = [
    //   {title: 'Home', component: HomePage,icon:'home'},
    //   { title: 'Machine Details', component: "MachineDetailsPage",icon:'analytics' },
    //   // { title: 'Support', component: "SupportPage" ,icon:'settings'},
    //   { title: 'About Scantech', component: "AboutScantechPage" ,icon:'information-circle'},
    //   { title: 'Our products', component: "LaserMachinesPage",icon:'cube' },
    //   { title: 'Technical Support', component: "ContactPage",icon:'ios-contacts' },
    

    // ];
   
  }
    
  initializeApp() {
    this.platform.ready().then(() => {
       this.smartAudio.preload('tabSwitch', 'assets/audio/facebook.mp3');
       this.network.onDisconnect().subscribe(() => {
       
        this.alert = this.alertCtrl.create({
          title: 'Network Disconnected',
          subTitle: 'To use this service please enable connectivity!',
          buttons: [
                      {
                        text:"Cancel",
                        role: 'cancel'
                      },
                      {
                        text: 'Network Settings',
                        handler: () => {
                          this.diagnostic.switchToMobileDataSettings();    
                        }
                      }
          ] 
        });
        this.alert.present();
       
      });
      this.platform.registerBackButtonAction(() => {
                      
                       if(this.nav.canGoBack()){
                         this.nav.pop();
                       }else{
                         if(this.backAlert){
                           this.backAlert.dismiss();
                           this.backAlert=null
                         }else{ 
                           this.storage.get('currentPage').then((val) => {
                            // alert("page"+val);
                            if(val=='HomePage')
                              {
                                 this.myHandlerFunction();
                              }else
                                {
                                  this.nav.setRoot(HomePage);
                                }
                             });
                          
                         }
                       }
                     });
      this.statusBar.styleDefault();
      this.splashScreen.hide();
     
      this.storage.get('isLoggedIn').then((val)=>{
        if (val == 'true') {
        
          this.rootPage = HomePage;
        } else {
        
          this.rootPage = "LoginPage";
        }
      });
    });
  }
 myHandlerFunction(){
    
    this.backAlert = this.alertCtrl.create({
    title: 'Exit?',
    message: 'Do you want to exit the app?',
    buttons: [
      {   
        text: 'Cancel',
        role: 'cancel',
        handler: () => {

        }
      },
      {
        text: 'Exit',
        handler: () => {
          this.platform.exitApp();
        }
      }
    ]
  });
  this.backAlert.present();
} 
  // openPage(page) {
  //   // Reset the content nav to have just this page
  //   // we wouldn't want the back button to show in this scenario
  //   this.nav.setRoot(page.component);
  // }
  home(){
    this.nav.setRoot(HomePage);
  }
  machine_details(){
    this.nav.setRoot("MachineDetailsPage");
  }
  about()
  {
    this.nav.setRoot("AboutScantechPage");
  }
  // about(){
  //   if(this.isToggled==true)
  //     {
  //   const browser = this.iab.create('https://www.scantechlaser.com/about-us');
  //     }
  // else{
  //      console.log('Entesdr');
  //      window.location.href = 'https://www.scantechlaser.com/about-us';
  //     }
  // }
  products(){
     if(this.isToggled==true)
      {
  const browser = this.iab.create('https://www.scantechlaser.com/laser-machines-by-product'); 
      }
else{
       console.log('Entesdr');
       window.location.href = 'https://www.scantechlaser.com/laser-machines-by-product';
      }

    
  }

  technical_support(){
    this.nav.setRoot("ContactPage");
  }
  setting(){
    this.nav.setRoot("AppSettingPage");
  }
  logout(){
     let confirm = this.alertCtrl.create({
      title: 'Conform Logout',
      message: 'Do you agree to Logout',
      buttons: [
        {
          text: 'No',
          handler: () => {
            //console.log('Disagree clicked');
          }
        },
        {
          text: 'Yes',
          handler: () => {
            this.storage.clear();
    this.nav.setRoot("LoginPage");
          }
        }
      ]
    });
    confirm.present();
 
   
  }
  myAlert(){
     let prompt = this.alertCtrl.create({
      title: 'Change Password!',
      message: "Change the password for security perpose for that enter your registered Email",
      inputs: [
        {
          name: 'email',
          placeholder: 'Email'
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
          text: 'Save',
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
    let email=this.email;
    let randnum=Math.floor(Math.random()*((100 - 1 + 1)) + 1);
    let data=JSON.stringify({email,randnum});
   // console.log(data);
    let link="https://www.scantechlaser.com/Erp_service_app/change_pass.php";
    this.http.post(link,data).map(res=>res.json()).subscribe(data=>{
      this.response=data.res;
      console.log("dadada",this.response)
    })
  }
}
