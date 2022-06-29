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
      },
      {
        field: 'phone',
        header: 'Phone',
      },
      {
        field: 'example',
        header: 'Example',
      },
      {
        header: 'Address',
        childrens: [
          {
            field: 'address.street',
            header: 'Street',
          },
          {
            field: 'address.city',
            header: 'City',
          },
          {
            field: 'address.zipcode',
            header: 'Zipcode',
          },
        ],
      },
      {
        field: 'website',
        header: 'Website',
      },
      {
        header: 'Company',
        childrens: [
          {
            field: 'company.name',
            header: 'Name',
          },
          {
            field: 'company.bs',
            header: 'BS',
          },
        ],
      },
    ]);
  }

  public handleView(record: any): void {
    console.log('INFO: Come from handleView');
    console.log(record);
  }

  public handleEdit(record: any): void {
    console.log('INFO: Come from handleEdit');
    console.log(record);
  }

  public handleDelete(record: any): void {
    console.log('INFO: Come from handleDelete');
    console.log(record);
  }
}
