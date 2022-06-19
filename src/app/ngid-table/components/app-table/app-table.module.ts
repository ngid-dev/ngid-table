import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppTableComponent } from './app-table.component';

@NgModule({
  imports: [CommonModule],
  declarations: [AppTableComponent],
  exports: [AppTableComponent],
})
export class AppTableModule {}
