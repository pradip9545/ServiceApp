import { InAppBrowser } from '@ionic-native/in-app-browser';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the AboutScantechPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-about-scantech',
  templateUrl: 'about-scantech.html',
  providers:[InAppBrowser]
})
export class AboutScantechPage {
    menu:Array<any> = [];
    showDetails1:boolean;
    icon1:any;
    showDetails2:boolean;
    icon2:any;
    showDetails3:boolean;
    icon3:any;
    showDetails4:boolean;
    icon4:any;
    showDetails5:boolean;
    icon5:any;
    showDetails6:boolean;
    icon6:any;
    showDetails7:boolean;
    icon7:any;
     showDetails8:boolean;
    icon8:any;
     showDetails9:boolean;
    icon9:any;
  constructor(public storage: Storage,public iab:InAppBrowser,public navCtrl: NavController, public navParams: NavParams) {
   this.showDetails1=false;
   this.icon1='ios-add-outline';
   this.showDetails2=false;
   this.icon2='ios-add-outline';
   this.showDetails3=false;
   this.icon3='ios-add-outline';
    this.showDetails4=false;
   this.icon4='ios-add-outline';
    this.showDetails5=false;
   this.icon5='ios-add-outline';
    this.showDetails6=false;
   this.icon6='ios-add-outline';
   this.showDetails7=false;
   this.icon7='ios-add-outline';
   this.showDetails8=false;
   this.icon8='ios-add-outline';
   this.showDetails9=false;
   this.icon9='ios-add-outline';
   
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutScantechPage');
     this.storage.set('currentPage', 'AboutScantechPage');
  }
  toggleDetails(menu) {
    if (menu.showDetails) {
        menu.showDetails = false;
        menu.icon = 'ios-add-outline';
    } else {
        menu.showDetails = true;
        menu.icon = 'ios-remove-outline';
    }
  }
  toggleDetails1() {
    if (this.showDetails1) {
       this.showDetails1 = false;
        this.icon1 = 'ios-add-outline';
    } else {
        this.showDetails1 = true;
        this.icon1 = 'ios-remove-outline';
       this.showDetails3=false;
          this.icon3 = 'ios-add-outline';
           this.showDetails2=false;
          this.icon2 = 'ios-add-outline';
           this.showDetails4=false;
          this.icon4 = 'ios-add-outline';
           this.showDetails5=false;
          this.icon5 = 'ios-add-outline';
           this.showDetails6=false;
          this.icon6 = 'ios-add-outline';
           this.showDetails7=false;
          this.icon7 = 'ios-add-outline';
           this.showDetails8=false;
          this.icon8 = 'ios-add-outline';
           this.showDetails9=false;
          this.icon9 = 'ios-add-outline';
    }
  }
    toggleDetails2() {
    if (this.showDetails2) {
       this.showDetails2 = false;
        this.icon2 = 'ios-add-outline';
    } else {
        this.showDetails2 = true;
        this.icon2 = 'ios-remove-outline';
        this.showDetails3=false;
          this.icon3 = 'ios-add-outline';
           this.showDetails1=false;
          this.icon1 = 'ios-add-outline';
           this.showDetails4=false;
          this.icon4 = 'ios-add-outline';
           this.showDetails5=false;
          this.icon5 = 'ios-add-outline';
           this.showDetails6=false;
          this.icon6 = 'ios-add-outline';
           this.showDetails7=false;
          this.icon7 = 'ios-add-outline';
           this.showDetails8=false;
          this.icon8 = 'ios-add-outline';
           this.showDetails9=false;
          this.icon9 = 'ios-add-outline';
    }
  }
    toggleDetails3() {
    if (this.showDetails3) {
       this.showDetails3 = false;
        this.icon3 = 'ios-add-outline';
    } else {
        this.showDetails3 = true;
        this.icon3 = 'ios-remove-outline';
         this.showDetails1=false;
          this.icon1 = 'ios-add-outline';
           this.showDetails2=false;
          this.icon2 = 'ios-add-outline';
           this.showDetails4=false;
          this.icon4 = 'ios-add-outline';
           this.showDetails5=false;
          this.icon5 = 'ios-add-outline';
           this.showDetails6=false;
          this.icon6 = 'ios-add-outline';
           this.showDetails7=false;
          this.icon7 = 'ios-add-outline';
           this.showDetails8=false;
          this.icon8 = 'ios-add-outline';
           this.showDetails9=false;
          this.icon9 = 'ios-add-outline';
    }
  }
      toggleDetails4() {
    if (this.showDetails4) {
       this.showDetails4 = false;
        this.icon4 = 'ios-add-outline';
    } else {
        this.showDetails4 = true;
        this.icon4 = 'ios-remove-outline';
         this.showDetails1=false;
          this.icon1 = 'ios-add-outline';
           this.showDetails2=false;
          this.icon2 = 'ios-add-outline';
           this.showDetails3=false;
          this.icon3 = 'ios-add-outline';
           this.showDetails5=false;
          this.icon5 = 'ios-add-outline';
           this.showDetails6=false;
          this.icon6 = 'ios-add-outline';
           this.showDetails7=false;
          this.icon7 = 'ios-add-outline';
           this.showDetails8=false;
          this.icon8 = 'ios-add-outline';
           this.showDetails9=false;
          this.icon9 = 'ios-add-outline';
    }
  }
   toggleDetails5() {
    if (this.showDetails5) {
       this.showDetails5 = false;
        this.icon5 = 'ios-add-outline';
    } else {
        this.showDetails5 = true;
        this.icon5 = 'ios-remove-outline';
         this.showDetails1=false;
          this.icon1 = 'ios-add-outline';
           this.showDetails2=false;
          this.icon2 = 'ios-add-outline';
           this.showDetails3=false;
          this.icon3 = 'ios-add-outline';
           this.showDetails4=false;
          this.icon4 = 'ios-add-outline';
           this.showDetails6=false;
          this.icon6 = 'ios-add-outline';
           this.showDetails7=false;
          this.icon7 = 'ios-add-outline';
           this.showDetails8=false;
          this.icon8 = 'ios-add-outline';
           this.showDetails9=false;
          this.icon9 = 'ios-add-outline';
    }
  }
   toggleDetails6() {
    if (this.showDetails6) {
       this.showDetails6 = false;
        this.icon6= 'ios-add-outline';
    } else {
        this.showDetails6 = true;
        this.icon6 = 'ios-remove-outline';
         this.showDetails1=false;
          this.icon1 = 'ios-add-outline';
           this.showDetails2=false;
          this.icon2 = 'ios-add-outline';
           this.showDetails3=false;
          this.icon3 = 'ios-add-outline';
           this.showDetails4=false;
          this.icon4 = 'ios-add-outline';
           this.showDetails5=false;
          this.icon5 = 'ios-add-outline';
           this.showDetails7=false;
          this.icon7 = 'ios-add-outline';
           this.showDetails8=false;
          this.icon8 = 'ios-add-outline';
           this.showDetails9=false;
          this.icon9 = 'ios-add-outline';
    }
  }
     toggleDetails7() {
    if (this.showDetails7) {
       this.showDetails7 = false;
        this.icon7= 'ios-add-outline';
    } else {
        this.showDetails7 = true;
        this.icon7 = 'ios-remove-outline';
         this.showDetails1=false;
          this.icon1 = 'ios-add-outline';
           this.showDetails2=false;
          this.icon2 = 'ios-add-outline';
           this.showDetails3=false;
          this.icon3 = 'ios-add-outline';
           this.showDetails4=false;
          this.icon4 = 'ios-add-outline';
           this.showDetails5=false;
          this.icon5 = 'ios-add-outline';
           this.showDetails6=false;
          this.icon6 = 'ios-add-outline';
           this.showDetails8=false;
          this.icon8 = 'ios-add-outline';
           this.showDetails9=false;
          this.icon9 = 'ios-add-outline';
    }
  }
      toggleDetails8() {
    if (this.showDetails8) {
       this.showDetails8 = false;
        this.icon8= 'ios-add-outline';
    } else {
        this.showDetails8 = true;
        this.icon8 = 'ios-remove-outline';
         this.showDetails1=false;
          this.icon1 = 'ios-add-outline';
           this.showDetails2=false;
          this.icon2 = 'ios-add-outline';
           this.showDetails3=false;
          this.icon3 = 'ios-add-outline';
           this.showDetails4=false;
          this.icon4 = 'ios-add-outline';
           this.showDetails5=false;
          this.icon5 = 'ios-add-outline';
           this.showDetails6=false;
          this.icon6 = 'ios-add-outline';
           this.showDetails7=false;
          this.icon7 = 'ios-add-outline';
           this.showDetails9=false;
          this.icon9 = 'ios-add-outline';
    }
  }
    toggleDetails9() {
    if (this.showDetails9) {
       this.showDetails9 = false;
        this.icon9= 'ios-add-outline';
    } else {
        this.showDetails9 = true;
        this.icon9 = 'ios-remove-outline';
          this.showDetails1=false;
          this.icon1 = 'ios-add-outline';
           this.showDetails2=false;
          this.icon2 = 'ios-add-outline';
           this.showDetails3=false;
          this.icon3 = 'ios-add-outline';
           this.showDetails4=false;
          this.icon4 = 'ios-add-outline';
           this.showDetails5=false;
          this.icon5 = 'ios-add-outline';
           this.showDetails6=false;
          this.icon6 = 'ios-add-outline';
           this.showDetails7=false;
          this.icon7 = 'ios-add-outline';
           this.showDetails8=false;
          this.icon8 = 'ios-add-outline';
    }
  }
}
