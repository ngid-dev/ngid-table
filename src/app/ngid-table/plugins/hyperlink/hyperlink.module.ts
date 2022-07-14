import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HyperlinkComponent } from './hyperlink.component';

@NgModule({
  imports: [CommonModule],
  declarations: [HyperlinkComponent],
  exports: [HyperlinkComponent],
})
export class HyperlinkModule {}
