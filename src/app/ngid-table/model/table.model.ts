import { EventEmitter } from '@angular/core';
import { TableColumnModel } from './table-column.model';
import { TablePaginationModel } from './table-pagination.model';
export class TableModel<T> {
  private records: Array<T>;
  public requestReload: EventEmitter<void>;
  public pagination: TablePaginationModel;
  public customData: { [key: string]: any } | null;
  constructor(
    public moduleCode: string,
    public columns: Array<TableColumnModel>
  ) {
    this.requestReload = new EventEmitter();
  }

  public setRecords(records: Array<T>): void {
    this.records = records;
  }

  public getRecords(): Array<T> {
    return Array.from(this.records || []);
  }

  public reload(): void {
    this.requestReload.emit();
  }

  public setCustomdata(customData: { [key: string]: any } | null): void {
    this.customData = customData;
  }
}
