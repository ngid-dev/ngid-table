import { TableColumnModel } from '../model/table-column.model';

export class TableColumn {
  public value: any;
  constructor(public model: TableColumnModel) {}

  public static create(model: TableColumnModel, record: any): TableColumn {
    const tableColumn = new TableColumn(model);
    tableColumn.value = record ? record[model.field] : null;
    return tableColumn;
  }
}
