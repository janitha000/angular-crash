import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EButtonComponent } from './button/button.component';



@NgModule({
  declarations: [
    EButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports : [
    EButtonComponent
  ]
})
export class ComponentsModule { }
