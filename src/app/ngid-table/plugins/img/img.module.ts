import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ValueWrapperModule } from '../../components/value-wrapper/value-wrapper.module';
import { ImgComponent } from './img.component';

@NgModule({
  imports: [CommonModule, ValueWrapperModule],
  declarations: [ImgComponent],
  exports: [ImgComponent],
})
export class ImgModule {}
