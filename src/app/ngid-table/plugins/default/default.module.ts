import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DefaultComponent } from './default.component';

@NgModule({
  imports: [CommonModule],
  declarations: [DefaultComponent],
  exports: [DefaultComponent],
})
export class DefaultModule {}
