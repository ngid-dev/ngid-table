import { TableColumnModel } from '../model/table-column.model';
import { TableRowModel } from '../model/table-row.model';
import { TableColumn } from './table-column';

export class TableRow {
  public columns: Array<TableColumn>;
  public position: number;
  constructor(public model: TableRowModel, public isSelected: boolean) {}

  public static create(
    model: TableRowModel,
    position: number,
    isSelected: boolean = false
  ): TableRow {
    const tableRow = new TableRow(model, isSelected);
    tableRow.position = position;
    tableRow.columns = model.columns.map(
      (column: TableColumnModel, index: number) =>
        TableColumn.create(column, model.record, index + 1)
    );
    return tableRow;
  }
}
