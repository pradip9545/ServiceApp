import { Http } from '@angular/http';
import { Storage } from '@ionic/storage';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import "rxjs/Rx";
import {HomePage} from '../home/home';
/**
 * Generated class for the EmailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-email',
  templateUrl: 'email.html',
  styles:[`
   input.ng-invalid {border-left:5px solid red; }
    input.ng-valid {border-left:5px solid green; }
  `]
})
export class EmailPage {
  response:any;
  email:any;
  email_response:any;
  code:any;
  company_name:any;
  constructor(public alertCtrl:AlertController,public loadingCtrl:LoadingController,public http:Http,public storage:Storage,public navCtrl: NavController, public navParams: NavParams) {
   this.response=this.navParams.get('res');
   
   this.email=this.navParams.get('client_email');
  //  console.log(this.response,this.email);
    
    this.check_status();
    this.fetch_login_detaiils();
    // console.log('con',this.email)
  }
  userform=new FormGroup({
    company_name:new FormControl(this.company_name),
    name:new FormControl(null,[Validators.required]),
    mobile:new FormControl(null,[Validators.required,Validators.pattern('^[1-9][0-9]{9}$')]),
    email:new FormControl(this.email),
    reason:new FormControl(null,[Validators.required]),
    message:new FormControl(null,[Validators.required]),
   
  });
  ionViewDidLoad() {
    console.log('ionViewDidLoad EmailPage');
  }
    fetch_login_detaiils(){
   this.storage.get('serviceemail').then((client_email)=>{
     let email=client_email;
     let data=JSON.stringify({email});
   //  console.log("json data",data);
     let link="https://www.scantechlaser.com/Service_App/fetch_value.php";
     this.http.post(link,data).map(res=>res.json()).subscribe((data)=>{
      // console.log(data.res);
       this.email_response=data.res;
      // console.log("asd",this.email_response);
       this.company_name=this.email_response[0].company_name;
       console.log("asd",this.company_name);
     })
   })
  }
  check_status(){
    let data=JSON.stringify({'machine_name':this.response.machine_name,'email':this.email});
   // console.log("dfdfdf",data);
    let link="https://www.scantechlaser.com/Service_App/check_status.php";
    this.http.post(link,data).map(res=>res.json()).subscribe((data)=>{
     // console.log("data",data);
      this.code=data.code;
    })
  }
  onSubmit(){
    const loading = this.loadingCtrl.create({
    content: '',
    spinner:'crescent'
  });

  loading.present();
    let company_name=this.company_name;
    let name=this.userform.value.name;
    let mobile=this.userform.value.mobile;
    let email=this.email;
    let reason=this.userform.value.reason;
    let message=this.userform.value.message;
    let scantech_email=this.response.email;
    let machine_name=this.response.machine_name;
    let data=JSON.stringify({company_name,name,mobile,email,reason,message,scantech_email,machine_name});
    let link="https://www.scantechlaser.com/Service_App/support_email.php";
   console.log("dadta",data);
    this.http.post(link,data).map(res=>res.json()).subscribe((data)=>{
      loading.dismiss().then(()=>{
         this.email_response=data.res;
    //  console.log("code",this.email_response.code);

      if(this.email_response.code=='true'){
         const alert = this.alertCtrl.create({
        title: 'Thank You',
        subTitle: 'Thank you we recieved your request. Our Executive will get in touch with you',
        buttons: ['Ok']
      });
      alert.present();
      this.navCtrl.setRoot(HomePage);
      }
    else{
      const alert = this.alertCtrl.create({
        title: 'Failed',
        subTitle: 'Something Went Wrong!!Try Again',
        buttons: ['Ok']
      });
      alert.present();
    }
      })
    
      
    })
  console.log('data',data);
  }
}
