import { Component } from '@angular/core';
import { BaseTable, makeTableProvider } from '../../base/base-table';
import { NgidTableService } from '../../ngid-table.service';

@Component({
  selector: 'app-table:not([theme])',
  templateUrl: './app-table.component.html',
  providers: makeTableProvider,
})
export class AppTableComponent extends BaseTable {
  constructor(tableService: NgidTableService) {
    super('table', tableService);
  }

  protected onInitTable(): void {
    console.log('INFO: come from onInitTable');
  }
}
