import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { DirectiveModule } from '../../directive/directive.module';
import { DefaultComponent } from './default.component';

@NgModule({
  imports: [CommonModule, NgbPaginationModule, DirectiveModule],
  declarations: [DefaultComponent],
  exports: [DefaultComponent],
})
export class DefaultModule {}
