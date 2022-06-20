import { EventEmitter } from '@angular/core';
import { TableColumnModel } from './table-column.model';
export class TableModel<T> {
  public records: Array<T>;
  public requestReload: EventEmitter<void>;
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
    return Array.from(this.records);
  }

  public reload(): void {
    this.requestReload.emit();
  }
}
