import { Component } from '@angular/core';
import { BaseTable, makeTableProvider } from '../../base/base-table';
import { NgidTableService } from '../../ngid-table.service';

@Component({
  selector: 'app-table[theme="simplr"],app-table[theme="default"]',
  templateUrl: './simplr-table.component.html',
  providers: makeTableProvider,
})
export class SimplrTableComponent extends BaseTable {
  constructor(tableService: NgidTableService) {
    super('table.simplr', tableService);
  }

  protected onInitTable(): void {}
}
