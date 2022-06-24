import { Table } from '../domain/table';
import { resolveTableRows } from '../helper/resolve-table-rows';

export const reloadTableAction = (state: Table): void => {
  resolveTableRows(state).then((rows) => {
    state.setRows(rows);
    state.setStateReady();
  });
};
