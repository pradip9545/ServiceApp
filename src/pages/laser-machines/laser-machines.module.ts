import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LaserMachinesPage } from './laser-machines';

@NgModule({
  declarations: [
    LaserMachinesPage,
  ],
  imports: [
    IonicPageModule.forChild(LaserMachinesPage),
  ],
})
export class LaserMachinesPageModule {}
