import { Table } from '../domain/table';
import { resolveTableRows } from '../helper/resolve-table-rows';

export const changePerPageTableAction = (
  state: Table,
  payload: { perPage: number }
): void => {
  state.perPage = payload.perPage;
  const rows = resolveTableRows(state);
  state.setRows(rows);
  state.setStateReady();
};
