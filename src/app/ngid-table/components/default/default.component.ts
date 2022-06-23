import { Component } from '@angular/core';
import { BaseTable, makeTableProvider } from '../../base/base-table';
import { NgidTableService } from '../../ngid-table.service';

@Component({
  selector: 'ngid-table:not([theme]),ngid-table[theme="default"]',
  templateUrl: './default.component.html',
  providers: makeTableProvider,
})
export class DefaultComponent extends BaseTable {
  constructor(tableService: NgidTableService) {
    super('table', tableService);
  }

  protected onInitTable(): void {}
}
