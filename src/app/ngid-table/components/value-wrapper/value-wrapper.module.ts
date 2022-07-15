import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ValueWrapperComponent } from './value-wrapper.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ValueWrapperComponent],
  exports: [ValueWrapperComponent],
})
export class ValueWrapperModule {}
