import { EventEmitter } from '@angular/core';
import { TableColumnModel } from './table-column.model';
import { TableOptionsModel } from './table-options.model';
import { TablePaginationModel } from './table-pagination.model';
export class TableModel<T> {
  private records: Array<T>;
  public requestReload: EventEmitter<void>;
  public pagination: TablePaginationModel;
  public customData: { [key: string]: any } | null;
  public selectedRecords: Array<T>;
  public requestReset: EventEmitter<void>;
  constructor(
    public moduleCode: string,
    public columns: Array<TableColumnModel>,
    public options?: TableOptionsModel
  ) {
    this.requestReload = new EventEmitter();
    this.requestReset = new EventEmitter();
    this.selectedRecords = new Array();
  }

  public setRecords(records: Array<T>): void {
    this.records = records;
  }

  public setSelectedRecords(records: Array<T>): void {
    this.selectedRecords = records || [];
  }

  public getRecords(): Array<T> {
    return Array.from(this.records || []);
  }

  public reload(): void {
    this.requestReload.emit();
  }

  public reset(): void {
    this.selectedRecords = new Array();
    this.requestReset.emit();
  }

  public setCustomdata(customData: { [key: string]: any } | null): void {
    this.customData = customData;
  }
}
