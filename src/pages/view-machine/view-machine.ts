import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ViewMachinePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-view-machine',
  templateUrl: 'view-machine.html',
})
export class ViewMachinePage {
  res:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.res=this.navParams.get('res');
    console.log("view",this.res);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewMachinePage');
  }

}
