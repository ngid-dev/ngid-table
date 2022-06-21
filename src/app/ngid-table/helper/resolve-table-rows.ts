import { Table } from '../domain/table';
import { TableRow } from '../domain/table-row';

export const resolveTableRows = (state: Table): Array<TableRow> => {
  if (state.model.getRecords().length === 0) return [];
  return state.model
    .getRecords()
    .map((record) =>
      TableRow.create({ record: record, columns: state.model.columns })
    );
};
