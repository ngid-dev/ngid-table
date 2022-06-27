import { HttpClient } from '@angular/common/http';
import { Service } from 'src/app/service';
import { Table } from '../domain/table';
import { TableColumn } from '../domain/table-column';
import { TableRow } from '../domain/table-row';
import { TableColumnModel } from '../model/table-column.model';
import { TableOrderType } from '../type/table-order.type';

export const resolveTableRows = (state: Table): Promise<Array<TableRow>> => {
  return new Promise((resolve) => {
    if (state.isServerSide) {
      const httpClient = Service.injector.get(HttpClient);
      const { page, perPage } = state.pagination;
      let query = `_page=${page}&_limit=${perPage}`;
      if (state.keywords) {
        query += `&q=${state.keywords}`;
      }

      if (state.sortField) {
        query += `&_sort=${
          state.sortField
        }&_order=${state.sortOrder?.toLowerCase()}`;
      }

      httpClient.get<Array<any>>(`${state.stringUrl}?${query}`).subscribe({
        next: (response: Array<any>) => {
          state.pagination.setTotalRecords(10);
          resolve(resolveRows(state, response));
        },
        error: () => {
          resolve([]);
        },
      });
    } else {
      if (state.model.getRecords().length === 0) return resolve([]);

      let records = state.model.getRecords();

      records = searchRecordByKeywords(
        records,
        state.columnsModel,
        state.keywords
      );

      records = orderRecords(records, state.sortField, state.sortOrder);

      state.pagination.setTotalRecords(records.length);

      const { perPage, page } = state.pagination;

      const startRow = (page - 1) * perPage;
      const endRow = page * perPage;

      records = records.splice(startRow, endRow);

      resolve(resolveRows(state, records));
    }
  });
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

const resolveRows = (state: Table, records: Array<any>): Array<TableRow> => {
  const startRow = (state.pagination.page - 1) * state.pagination.perPage;
  return records.map((record, index: number) =>
    TableRow.create(
      { record: record, columns: state.columnsModel },
      index + 1 + startRow
    )
  );
};
