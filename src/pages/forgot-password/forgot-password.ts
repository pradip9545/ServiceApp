import { Http } from '@angular/http';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import "rxjs/Rx"
/**
 * Generated class for the ForgotPasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-forgot-password',
  templateUrl: 'forgot-password.html',
})
export class ForgotPasswordPage {
  password:any;
  loadingPopup:any;
  constructor(public alertCtrl:AlertController,public http:Http,public loadingCtrl:LoadingController,public navCtrl: NavController, public navParams: NavParams) {
  this.password="";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ForgotPasswordPage');
  }
  forget_pass(){
    console.log(this.password);
      if (this.password==""){
       this.presentAlert("Please Enter your Email!")
    } else {
      
      this.loadingPopup = this.loadingCtrl.create({
        spinner: 'crescent', 
        content: 'Please Wait..'
      }); 
      this.loadingPopup.present();
      
        let link="https://www.scantechlaser.com/Service_App/forget_pass.php";
        let data=JSON.stringify({"email1":this.password});
        this.http.post(link,data).map(res=>res.json()).subscribe((data)=>{
          this.loadingPopup.dismiss().then(()=>{
          if(data.code=='true')
          {
              this.presentAlert("Please Check your email to reset your password!");
              this.navCtrl.push("LoginPage");
          }
          else if(data.code=='incorrect_email')
          {
                this.presentAlert("Sorry! We can't find your Email");
          }else if(data.code=='false')
          {
                this.presentAlert("Error while sending mail, Please try again later"); 
          }
        });  
        });




    }
  }

  presentAlert(title) {
    let alert = this.alertCtrl.create({
      title: title,
      buttons: ['OK']
    });
    alert.present();
  }
}
