import { Table } from '../domain/table';
import { initTableAction } from './init-table.action';
import { reloadTableAction } from './reload-table.action';
import * as tableAction from './table.action';

export const dispatchTableAction = (
  state: Table,
  action: tableAction.AllTableAction
): void => {
  switch (action.type) {
    case tableAction.INIT_TABLE:
      initTableAction(state);
      break;
    case tableAction.RELOAD_TABLE:
      reloadTableAction(state);
      break;
    default:
      break;
  }
};
