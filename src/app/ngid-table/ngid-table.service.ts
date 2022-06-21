import { Table } from './domain/table';
import { TableModel } from './model/table.model';

export class NgidTableService {
  private state: Table;
  public setState(model: TableModel<any>): Table {
    this.state = Table.create(model);
    return this.state;
  }

  public dispatch(): void {
    console.log(this.state);
  }
}
