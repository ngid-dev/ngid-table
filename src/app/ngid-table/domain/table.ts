import { TableModel } from '../model/table.model';
import { TableOrderType } from '../type/table-order.type';
import { TableColumn } from './table-column';
import { TableRow } from './table-row';

export class Table {
  public rows: Array<TableRow>;
  public columns: Array<TableColumn>;
  public isLoading: boolean;
  public keywords: string;
  public perPage: number;
  public perPages: Array<number>;
  public sortField: string | null;
  public sortOrder: TableOrderType;
  constructor(public model: TableModel<any>) {}

  public setStateLoading(): void {
    this.isLoading = true;
  }

  public setStateReady(): void {
    this.isLoading = false;
  }

  public setRows(rows: Array<TableRow>): void {
    this.rows = rows;
  }

  public static create(model: TableModel<any>): Table {
    const table = new Table(model);
    table.rows = new Array();
    table.perPage = 5;
    table.perPages = [5, 10, 25];
    table.columns = model.columns.map((column) =>
      TableColumn.create(column, null)
    );
    return table;
  }
}
