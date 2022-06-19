import { NgModule } from '@angular/core';
import { AppTableModule } from './components/app-table/app-table.module';
import { SimplrTableModule } from './components/simplr-table/simplr-table.module';

@NgModule({
  imports: [SimplrTableModule, AppTableModule],
  exports: [SimplrTableModule, AppTableModule],
})
export class NgidTableModule {}
