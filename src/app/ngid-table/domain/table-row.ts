import { TableColumn } from './table-column';

export class TableRow {
  public columns: Array<TableColumn>;
  constructor() {}

  public static create(): TableRow {
    const tableRow = new TableRow();
    tableRow.columns = new Array();
    return tableRow;
  }
}
