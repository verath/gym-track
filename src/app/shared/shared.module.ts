import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleToolbarComponent } from './components/title-toolbar/title-toolbar.component';
import { AppMaterialModule } from './app-material.module';

@NgModule({
  imports: [
    CommonModule,
    AppMaterialModule,
  ],
  declarations: [
    TitleToolbarComponent
  ],
  exports: [
    CommonModule,
    AppMaterialModule,
    TitleToolbarComponent,
  ]
})
export class SharedModule { }
