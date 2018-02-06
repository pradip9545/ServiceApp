import { InAppBrowser } from '@ionic-native/in-app-browser';
import { Http } from '@angular/http';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import "rxjs/Rx"
/**
 * Generated class for the LaserMachinesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-laser-machines',
  templateUrl: 'laser-machines.html',
  providers:[InAppBrowser]
})
export class LaserMachinesPage {
  response:any;
  constructor(public iab:InAppBrowser,public loadingCtrl:LoadingController,public http:Http,public navCtrl: NavController, public navParams: NavParams) {
    this.fetch();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LaserMachinesPage');
  }
  fetch(){
    const loading = this.loadingCtrl.create({
    content: '',
    spinner:'crescent'
  });

  loading.present();
  const browser = this.iab.create('https://www.scantechlaser.com/laser-machines-by-product');
  loading.dismiss();
  }
}
