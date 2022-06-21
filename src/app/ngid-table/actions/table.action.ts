import { IAction } from '../interface/action.interface';

export const INIT_TABLE = `[ Ngid Table ]: Initialization table`;
export const RELOAD_TABLE = `[ Ngid Table ]: Reload table`;

export class InitTable implements IAction<void> {
  public readonly type: string = INIT_TABLE;
}

export class ReloadTable implements IAction<void> {
  public readonly type: string = RELOAD_TABLE;
}

export type AllTableAction = InitTable | ReloadTable;
