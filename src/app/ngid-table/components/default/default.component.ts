import { Component } from '@angular/core';
import { NgidPopupService } from 'src/app/ngid-popup/ngid-popup.service';
import { BaseTable, makeTableProvider } from '../../base/base-table';
import { NgidTableService } from '../../ngid-table.service';
import { PopupFilterComponent } from './popup-filter.component';

@Component({
  selector: 'ngid-table:not([theme]),ngid-table[theme="default"]',
  templateUrl: './default.component.html',
  providers: makeTableProvider,
})
export class DefaultComponent extends BaseTable {
  constructor(
    tableService: NgidTableService,
    private ngidPopupService: NgidPopupService
  ) {
    super('table', tableService);
  }

  protected onInitTable(): void {}

  public handleShowFilter(): void {
    this.ngidPopupService.open(
      PopupFilterComponent,
      {
        headerFilterTmpl: this.headerFilterTmpl,
      },
      {
        size: 'md',
      }
    );
  }
}
