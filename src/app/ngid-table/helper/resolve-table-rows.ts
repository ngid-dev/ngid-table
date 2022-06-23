import { Table } from '../domain/table';
import { TableColumn } from '../domain/table-column';
import { TableRow } from '../domain/table-row';
import { TableOrderType } from '../type/table-order.type';

export const resolveTableRows = (state: Table): Array<TableRow> => {
  if (state.model.getRecords().length === 0) return [];

  let records = state.model.getRecords();

  records = searchRecordByKeywords(records, state.columns, state.keywords);

  records = orderRecords(records, state.sortField, state.sortOrder);

  records = records.splice(0, state.perPage);

  return records.map((record) =>
    TableRow.create({ record: record, columns: state.model.columns })
  );
};

const searchRecordByKeywords = (
  records: Array<any>,
  columns: Array<TableColumn>,
  keywords: string
): Array<any> => {
  if (!keywords) return records;
  return records.filter((record) => {
    let isMatch = false;
    columns.forEach((column) => {
      if (isMatch) return;
      const value: string = record[column.model.field].toLowerCase();
      if (value.includes(keywords.toLowerCase())) {
        isMatch = true;
      }
    });
    return isMatch;
  });
};

const orderRecords = (
  records: Array<any>,
  sortField: string | null,
  orderBy: TableOrderType
): Array<any> => {
  if (!sortField) return records;
  return records.sort((recordA, recordB) => {
    const valueA = recordA[sortField];
    const valueB = recordB[sortField];
    if (valueA < valueB) return orderBy === 'ASC' ? -1 : +1;
    return orderBy === 'ASC' ? +1 : -1;
  });
};
