import { Component } from '@angular/core';
import { BaseTable } from '../../base/base-table';

@Component({
  selector: 'app-table:not([theme])',
  templateUrl: './app-table.component.html',
})
export class AppTableComponent extends BaseTable {
  constructor() {
    super('table');
  }

  protected onInitTable(): void {
    console.log('INFO: come from onInitTable');
  }
}
