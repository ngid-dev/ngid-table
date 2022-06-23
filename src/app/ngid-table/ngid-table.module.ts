import { NgModule } from '@angular/core';
import { DefaultModule } from './components/default/default.module';
import { SimplrTableModule } from './components/simplr-table/simplr-table.module';

@NgModule({
  imports: [SimplrTableModule, DefaultModule],
  exports: [SimplrTableModule, DefaultModule],
})
export class NgidTableModule {}
