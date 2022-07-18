import { TableRow } from './table-row';
export class SelectedRow {
  private selectedRows: Array<TableRow>;
  constructor(
    private compareWith:
      | ((selectedRecord: any, record: any) => boolean)
      | undefined
  ) {
    this.selectedRows = new Array();
  }

  public addToSelecedRow(row: TableRow): void {
    if (this.getIndex(row) !== -1) return;
    this.selectedRows.push(row);
  }

  public removeFromSelectedRow(row: TableRow): void {
    const indexOfRow = this.getIndex(row);
    if (indexOfRow === -1) return;
    this.removeAt(indexOfRow);
  }

  public removeAt(index: number): void {
    this.selectedRows.splice(index, 1);
  }

  public getIndex(row: TableRow): number {
    return this.values.findIndex((value) =>
      this.compareWith
        ? this.compareWith(value, row.model.record)
        : JSON.stringify(value) === JSON.stringify(row.model.record)
    );
  }

  public reset(): void {
    this.selectedRows = new Array();
  }

  public get values(): Array<any> {
    return Array.from(this.selectedRows).map((row) => row.model.record);
  }

  public static create(
    compareWith: ((selectedRecord: any, record: any) => boolean) | undefined
  ): SelectedRow {
    const selectedRow = new SelectedRow(compareWith);
    return selectedRow;
  }
}
