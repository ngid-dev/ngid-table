import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { DefaultComponent } from './default.component';

@NgModule({
  imports: [CommonModule, NgbPaginationModule],
  declarations: [DefaultComponent],
  exports: [DefaultComponent],
})
export class DefaultModule {}
