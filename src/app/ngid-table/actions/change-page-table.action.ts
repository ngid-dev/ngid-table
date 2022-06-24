import { Table } from '../domain/table';
import { resolveTableRows } from '../helper/resolve-table-rows';

export const changePageTableAction = (
  state: Table,
  payload: { page: number }
): void => {
  state.pagination.setPage(payload.page);
  resolveTableRows(state).then((rows) => {
    state.setRows(rows);
    state.setStateReady();
  });
};
