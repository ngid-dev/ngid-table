import { CurrencyPipe, DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { TdContentDirective } from './td-content.directive';

@NgModule({
  declarations: [TdContentDirective],
  providers: [DatePipe, CurrencyPipe],
  exports: [TdContentDirective],
})
export class DirectiveModule {}
