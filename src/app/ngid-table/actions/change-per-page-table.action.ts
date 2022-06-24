import { Table } from '../domain/table';
import { resolveTableRows } from '../helper/resolve-table-rows';

export const changePerPageTableAction = (
  state: Table,
  payload: { perPage: number }
): void => {
  state.pagination.setPerPage(payload.perPage);
  resolveTableRows(state).then((rows) => {
    state.setRows(rows);
    state.setStateReady();
  });
};
