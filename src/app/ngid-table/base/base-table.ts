import {
  Component,
  ContentChild,
  Inject,
  Input,
  OnInit,
  Provider,
  TemplateRef,
} from '@angular/core';
import * as tableAction from '../actions/table.action';
import { Table } from '../domain/table';
import { TableColumn } from '../domain/table-column';
import { TableModel } from '../model/table.model';
import { NgidTableService } from '../ngid-table.service';

export const makeTableProvider: Array<Provider> = [NgidTableService];

@Component({
  template: '',
})
export abstract class BaseTable implements OnInit {
  @Input() model: TableModel<any>;
  @Input() stringUrl: string;
  @ContentChild('actionButtons') actionButtonsTmpl: TemplateRef<any>;
  public state: Table;
  protected abstract onInitTable(): void;
  constructor(
    @Inject(String) public moduleCode: string,
    protected tableService: NgidTableService
  ) {}

  ngOnInit(): void {
    this.setInitializationState();
    this.initTable();
    this.listenRequestReload();
    this.onInitTable();
  }

  private setInitializationState(): void {
    this.state = this.tableService.setState(this.model, this.stringUrl);
  }

  private initTable(): void {
    this.tableService.dispatch(new tableAction.InitTable());
  }

  private listenRequestReload(): void {
    this.model.requestReload.subscribe(() => {
      this.tableService.dispatch(new tableAction.ReloadTable());
    });
  }

  public handleSearch(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    const keywords = inputElement.value;
    this.tableService.dispatch(new tableAction.SearchTable({ keywords }));
  }

  public handleChangePerPage(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    const perPage = +selectElement.value;
    this.tableService.dispatch(new tableAction.ChangeMaxRowTable({ perPage }));
  }

  public handleSort(column: TableColumn): void {
    this.tableService.dispatch(new tableAction.SortTable({ column }));
  }

  public handleChangePage(page: number): void {
    this.tableService.dispatch(new tableAction.ChangePageTable({ page }));
  }
}
