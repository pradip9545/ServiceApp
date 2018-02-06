import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SupportCallPage } from './support-call';

@NgModule({
  declarations: [
    SupportCallPage,
  ],
  imports: [
    IonicPageModule.forChild(SupportCallPage),
  ],
})
export class SupportCallPageModule {}
