import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SparesGetQuotePage } from './spares-get-quote';

@NgModule({
  declarations: [
    SparesGetQuotePage,
  ],
  imports: [
    IonicPageModule.forChild(SparesGetQuotePage),
  ],
})
export class SparesGetQuotePageModule {}
