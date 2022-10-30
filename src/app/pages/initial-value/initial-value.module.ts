import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { IonicSelectableModule } from '../../../../projects/ionic-selectable/src/lib/ionic-selectable.module';
import { InitialValuePage } from './initial-value.page';

const routes: Routes = [{
  path: '',
  component: InitialValuePage
}];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonicSelectableModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    InitialValuePage
  ]
})
export class InitialValuePageModule { }
