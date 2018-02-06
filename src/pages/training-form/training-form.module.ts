import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TrainingFormPage } from './training-form';

@NgModule({
  declarations: [
    TrainingFormPage,
  ],
  imports: [
    IonicPageModule.forChild(TrainingFormPage),
  ],
})
export class TrainingFormPageModule {}
