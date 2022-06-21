import { TableModel } from '../model/table.model';
import { TableRow } from './table-row';

export class Table {
  public rows: Array<TableRow>;
  constructor(public model: TableModel<any>) {}

  public setRows(rows: Array<TableRow>): void {
    this.rows = rows;
  }

  public static create(model: TableModel<any>): Table {
    const table = new Table(model);
    table.rows = new Array();
    return table;
  }
}
