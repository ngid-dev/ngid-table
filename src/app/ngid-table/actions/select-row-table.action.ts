import { Table } from '../domain/table';
import { TableRow } from '../domain/table-row';

export const selectRowTable = (
  state: Table,
  payload: { row: TableRow; isChecked: boolean }
): void => {
  const { isChecked, row } = payload;
  console.log();
  row.isSelected = isChecked;
  if (isChecked) {
    state.selectedRow.addToSelecedRow(row);
  } else {
    state.selectedRow.removeFromSelectedRow(row);
  }
  state.model.selectedRecords = state.selectedRow.values;
  state.setStateReady();
};
