import { Component } from '@angular/core';
import { BaseTable } from '../../base/base-table';

@Component({
  selector: 'app-table[theme="simplr"],app-table[theme="default"]',
  templateUrl: './simplr-table.component.html',
})
export class SimplrTableComponent extends BaseTable {
  constructor() {
    super('table.simplr');
  }

  protected onInitTable(): void {
    console.log('INFO: come from onInitTable');
    console.log(this.model);
  }
}
