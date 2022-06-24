import { TablePaginationModel } from '../model/table-pagination.model';

export class TablePagination {
  public totalRecord: number;
  public page: number;
  public perPage: number;
  constructor(public model: TablePaginationModel) {}

  public setTotalRecords(totalRecord: number): void {
    this.totalRecord = totalRecord;
  }

  public setPage(page: number): void {
    this.page = page;
  }

  public setPerPage(perPage: number): void {
    this.perPage = perPage;
  }

  public static create(model: TablePaginationModel): TablePagination {
    const state = new TablePagination(model);
    state.totalRecord = model?.totalRecord || 0;
    state.page = model?.page || 1;
    state.perPage = model?.perPage || 10;
    return state;
  }
}
