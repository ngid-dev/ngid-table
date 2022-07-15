import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ValueWrapperModule } from '../../components/value-wrapper/value-wrapper.module';
import { DefaultComponent } from './default.component';

@NgModule({
  imports: [CommonModule, ValueWrapperModule],
  declarations: [DefaultComponent],
  exports: [DefaultComponent],
})
export class DefaultModule {}
