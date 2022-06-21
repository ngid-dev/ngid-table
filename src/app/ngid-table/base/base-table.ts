import { Component, Inject, Input, OnInit, Provider } from '@angular/core';
import { Table } from '../domain/table';
import { TableModel } from '../model/table.model';
import { NgidTableService } from '../ngid-table.service';

export const makeTableProvider: Array<Provider> = [NgidTableService];

@Component({
  template: '',
})
export abstract class BaseTable implements OnInit {
  @Input() public model: TableModel<any>;
  public state: Table;
  protected abstract onInitTable(): void;
  constructor(
    @Inject(String) public moduleCode: string,
    protected tableService: NgidTableService
  ) {}

  ngOnInit(): void {
    this.setInitializationState();
    this.onInitTable();
  }

  private setInitializationState(): void {
    this.state = this.tableService.setState(this.model);
  }
}
