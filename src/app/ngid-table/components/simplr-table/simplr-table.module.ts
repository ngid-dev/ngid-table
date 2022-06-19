import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { SimplrTableComponent } from './simplr-table.component';

@NgModule({
  imports: [CommonModule, NgbPaginationModule],
  declarations: [SimplrTableComponent],
  exports: [SimplrTableComponent],
})
export class SimplrTableModule {}
