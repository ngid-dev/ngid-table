import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ValueWrapperModule } from '../../components/value-wrapper/value-wrapper.module';
import { HyperlinkComponent } from './hyperlink.component';

@NgModule({
  imports: [CommonModule, ValueWrapperModule],
  declarations: [HyperlinkComponent],
  exports: [HyperlinkComponent],
})
export class HyperlinkModule {}
