import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,Events } from 'ionic-angular';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the AppSettingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-app-setting',
  templateUrl: 'app-setting.html',
})
export class AppSettingPage {
  isToggled: boolean;
  isAudio:boolean;
  constructor(public events:Events,public  storage: Storage,public navCtrl: NavController, public navParams: NavParams) {
     storage.get('toggle').then((val) => {
    console.log('Toggle Value', val);
    this.isToggled=val;
  });
    storage.get('Audio').then((val) => {
    console.log('Audio Value', val);
    this.isAudio=val;
  });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AppSettingPage');
     this.storage.set('currentPage', 'AppSettingPage');
    
  }
  notify() {
  console.log("Toggled: "+ this.isToggled); 
  this.storage.set('toggle', this.isToggled);
  this.events.publish("toggle",this.isToggled);
}
audio(){
  console.log("Audio: "+ this.isAudio);
  this.storage.set('Audio', this.isAudio);
  this.events.publish("Audio",this.isAudio);
}
}
