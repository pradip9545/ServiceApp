import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MachineDetailsPage } from './machine-details';

@NgModule({
  declarations: [
    MachineDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(MachineDetailsPage),
  ],
})
export class MachineDetailsPageModule {}
