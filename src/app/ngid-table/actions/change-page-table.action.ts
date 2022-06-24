import { Table } from '../domain/table';
import { resolveTableRows } from '../helper/resolve-table-rows';

export const changePageTableAction = (
  state: Table,
  payload: { page: number }
): void => {
  state.pagination.setPage(payload.page);
  const rows = resolveTableRows(state);
  state.setRows(rows);
  state.setStateReady();
};
