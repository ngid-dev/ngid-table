export class TablePaginationModel {
  constructor(
    public page: number,
    public perPage: number,
    public totalRecord: number
  ) {}
}
