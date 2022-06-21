import { TableModel } from '../model/table.model';
import { TableColumn } from './table-column';
import { TableRow } from './table-row';

export class Table {
  public rows: Array<TableRow>;
  public columns: Array<TableColumn>;
  public isLoading: boolean;
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
    table.columns = model.columns.map((column) =>
      TableColumn.create(column, null)
    );
    return table;
  }
}
