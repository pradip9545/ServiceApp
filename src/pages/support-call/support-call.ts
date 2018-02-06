import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,ViewController} from 'ionic-angular';

/**
 * Generated class for the SupportCallPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-support-call',
  templateUrl: 'support-call.html',
})
export class SupportCallPage {
  response:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl: ViewController,
    ) {
   this.response=this.navParams.get('response');
   console.log(this.response);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SupportCallPage');
  }
dismiss() {
    this.viewCtrl.dismiss();
  }
}
