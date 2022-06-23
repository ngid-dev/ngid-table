import { TableColumnModel } from '../model/table-column.model';

export class TableColumn {
  public value: any;
  public sortable: boolean;
  constructor(public model: TableColumnModel) {}

  public static create(model: TableColumnModel, record: any): TableColumn {
    const tableColumn = new TableColumn(model);
    tableColumn.sortable = model.sortable !== false;
    tableColumn.value = record ? record[model.field] : null;
    return tableColumn;
  }
}
