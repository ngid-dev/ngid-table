import { Table } from '../domain/table';
import { resolveTableRows } from '../helper/resolve-table-rows';

export const searchTableAction = (
  state: Table,
  payload: { keywords: string }
): void => {
  state.keywords = payload.keywords;
  resolveTableRows(state).then((rows) => {
    state.setRows(rows);
    state.setStateReady();
  });
};
