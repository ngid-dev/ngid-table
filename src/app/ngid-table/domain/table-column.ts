import { TableColumnModel } from '../model/table-column.model';

export class TableColumn {
  public value: any;
  public sortable: boolean;
  constructor(public model: TableColumnModel, public position: number) {}

  public static create(
    model: TableColumnModel,
    record: any,
    position: number
  ): TableColumn {
    const tableColumn = new TableColumn(model, position);
    tableColumn.sortable = model.sortable !== false;
    tableColumn.value =
      record && model.field ? this.resolveRecord(record, model.field) : null;
    return tableColumn;
  }

  public static resolveRecord(record: any, field: string): string {
    let value = { ...(record || {}) };
    const fieldSplit = field.split('.');
    while (fieldSplit.length > 0) {
      const firstSplit = fieldSplit.shift() as string;
      value = value[firstSplit];
      if (!value) {
        fieldSplit.splice(0);
      }
    }
    return value;
  }
}
