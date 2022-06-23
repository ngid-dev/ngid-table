import { Table } from '../domain/table';
import { resolveTableRows } from '../helper/resolve-table-rows';

export const searchTableAction = (
  state: Table,
  payload: { keywords: string }
): void => {
  state.keywords = payload.keywords;
  const rows = resolveTableRows(state);
  state.setRows(rows);
  state.setStateReady();
};
