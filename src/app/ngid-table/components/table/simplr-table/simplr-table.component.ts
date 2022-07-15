import { Component } from '@angular/core';
import {
  BaseTable,
  makeTableProvider,
} from 'src/app/ngid-table/base/base-table';
import { NgidTableService } from 'src/app/ngid-table/ngid-table.service';

@Component({
  selector: 'ngid-table[theme="simplr"]',
  templateUrl: './simplr-table.component.html',
  providers: makeTableProvider,
})
export class SimplrTableComponent extends BaseTable {
  constructor(tableService: NgidTableService) {
    super('table.simplr', tableService);
  }

  protected onInitTable(): void {}
}
