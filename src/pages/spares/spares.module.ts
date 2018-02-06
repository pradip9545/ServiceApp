import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SparesPage } from './spares';

@NgModule({
  declarations: [
    SparesPage,
  ],
  imports: [
    IonicPageModule.forChild(SparesPage),
  ],
})
export class SparesPageModule {}
