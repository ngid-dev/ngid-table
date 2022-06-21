import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TableModel } from './ngid-table/model/table.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public tableModel: TableModel<any>;

  private moduleCode = 'app';
  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.buildTableModel();
    this.setTableRecords();
  }

  private buildTableModel(): void {
    this.tableModel = new TableModel(this.moduleCode, [
      {
        field: 'name',
        header: 'Name',
      },
      {
        field: 'username',
        header: 'Username',
      },
      {
        field: 'email',
        header: 'Email',
        sortable: false,
      },
      {
        field: 'phone',
        header: 'Phone',
      },
      {
        field: 'website',
        header: 'Website',
      },
      // {
      //   field: 'company.name',
      //   header: 'Company Name',
      // },
    ]);
  }

  private setTableRecords(): void {
    this.httpClient
      .get<Array<any>>('https://jsonplaceholder.typicode.com/users')
      .subscribe((response: Array<any>) => {
        this.tableModel.setRecords(response);
        this.tableModel.reload();
      });
  }
}
