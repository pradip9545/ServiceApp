import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BreakdownFormPage } from './breakdown-form';

@NgModule({
  declarations: [
    BreakdownFormPage,
  ],
  imports: [
    IonicPageModule.forChild(BreakdownFormPage),
  ],
})
export class BreakdownFormPageModule {}
