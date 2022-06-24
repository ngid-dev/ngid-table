import { Table } from '../domain/table';
import { TableColumn } from '../domain/table-column';
import { TableRow } from '../domain/table-row';
import { TableColumnModel } from '../model/table-column.model';
import { TableOrderType } from '../type/table-order.type';

export const resolveTableRows = (state: Table): Array<TableRow> => {
  if (state.model.getRecords().length === 0) return [];

  let records = state.model.getRecords();

  records = searchRecordByKeywords(records, state.columnsModel, state.keywords);

  records = orderRecords(records, state.sortField, state.sortOrder);

  records = records.splice(0, state.perPage);

  return records.map((record) =>
    TableRow.create({ record: record, columns: state.columnsModel })
  );
};

const searchRecordByKeywords = (
  records: Array<any>,
  columns: Array<TableColumnModel>,
  keywords: string
): Array<any> => {
  if (!keywords) return records;
  return records.filter((record) => {
    let isMatch = false;
    columns.forEach((column) => {
      if (isMatch) return;
      const value: string = TableColumn.resolveRecord(
        record,
        column.field as string
      );
      if (value && value.toLowerCase().includes(keywords.toLowerCase())) {
        isMatch = true;
      }
    });
    return isMatch;
  });
};

const orderRecords = (
  records: Array<any>,
  sortField: string | null | undefined,
  orderBy: TableOrderType
): Array<any> => {
  if (!sortField) return records;
  return records.sort((recordA, recordB) => {
    const valueA = TableColumn.resolveRecord(recordA, sortField);
    const valueB = TableColumn.resolveRecord(recordB, sortField);
    if (valueA && valueB) {
      if (valueA < valueB) return orderBy === 'ASC' ? -1 : +1;
      return orderBy === 'ASC' ? +1 : -1;
    }
    return 0;
  });
};
