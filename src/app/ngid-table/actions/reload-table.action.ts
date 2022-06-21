import { Table } from '../domain/table';
import { resolveTableRows } from '../helper/resolve-table-rows';

export const reloadTableAction = (state: Table): void => {
  const rows = resolveTableRows(state);
  state.setRows(rows);
  state.setStateReady();
};
