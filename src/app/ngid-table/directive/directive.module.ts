import { NgModule } from '@angular/core';
import { TdContentDirective } from './td-content.directive';

@NgModule({
  declarations: [TdContentDirective],
  exports: [TdContentDirective],
})
export class DirectiveModule {}
