import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgidBadgeComponent } from './ngid-badge/ngid-badge.component';
import { NgidExampleComponent } from './ngid-example/ngid-example.component';
import { TableColumn } from './ngid-table/domain/table-column';
import { AnchorAttributeModel } from './ngid-table/model/anchor-attribute.model';
import { TableModel } from './ngid-table/model/table.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public tableModel: TableModel<any>;
  public tablePostModel: TableModel<any>;
  public formGroup: FormGroup;
  private moduleCode = 'app';
  public userStatusBadgeVariant: { [key: string]: any } = {
    SUBMITTED: 'SECONDARY',
    WAITING: 'WARNING',
    APPROVED: 'SUCCESS',
  };
  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.buildFormGroup();
    this.buildTableModel();
    this.setSelectedRecords();
    this.buildTablePostModel();
  }

  private buildFormGroup(): void {
    this.formGroup = new FormGroup({
      status: new FormControl(null),
    });
  }

  private buildTableModel(): void {
    this.tableModel = new TableModel(
      this.moduleCode,
      [
        {
          field: 'profilePictureUrl',
          plugins: {
            name: 'img',
            rounded: true,
          },
        },
        {
          field: 'name',
          header: 'Name',
          plugins: {
            name: 'hyperlink',
            customClass: 'hero-class-name',
            createAttribute: (record): AnchorAttributeModel => {
              return {
                href: `https://www.google.com?id=${record.id}`,
                target: '_self',
              };
            },
          },
        },
        {
          field: 'username',
          header: 'Username',
        },
        {
          field: 'email',
          header: 'Email',
          component: NgidExampleComponent,
        },
        {
          field: 'phone',
          header: 'Phone',
        },
        {
          field: 'status',
          header: 'User Status',
          component: {
            target: NgidBadgeComponent,
            callbacksInstance: (column: TableColumn) => {
              const text = column.value;
              const variant = this.userStatusBadgeVariant[text];
              return { text, variant };
            },
          },
        },
        {
          field: 'birthDate',
          header: 'Birth Date',
          type: {
            name: 'date',
            format: 'dd MMMM yyyy',
          },
        },
        {
          field: 'salary',
          header: 'Salary',
          type: {
            name: 'currency',
            display: '',
            digitsInfo: '0.2-2',
          },
        },
        {
          field: 'favoriteNumber',
          header: 'Favorite Number',
          type: 'number',
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
      ],
      {
        selectedRow: {
          compareWith: (selectedRecord: any, record: any): boolean => {
            return selectedRecord.id === record.id;
          },
        },
      }
    );
  }

  private setSelectedRecords(): void {
    const records: Array<any> = [
      {
        id: 1,
        name: 'Leanne Graham',
        username: 'leannegraham',
        email: 'Sincere@april.biz',
        address: {
          street: 'Kulas Light',
          suite: 'Apt. 556',
          city: 'Gwenborough',
          zipcode: '92998-3874',
          geo: {
            lat: '-37.3159',
            lng: '81.1496',
          },
        },
        profilePictureUrl: 'https://picsum.photos/200?id=1',
        phone: null,
        website: 'hildegard.org',
        company: {
          name: 'Romaguera-Crona',
          catchPhrase: 'Multi-layered client-server neural-net',
          bs: 'harness real-time e-markets',
        },
        status: 'APPROVED',
        birthDate: 699296400000,
        salary: 109123513,
        favoriteNumber: 4,
      },
      {
        id: 2,
        name: 'Ervin Howell',
        username: 'Antonette',
        email: 'Shanna@melissa.tv',
        address: {
          street: 'Victor Plains',
          suite: 'Suite 879',
          city: 'Wisokyburgh',
          zipcode: '90566-7771',
          geo: {
            lat: '-43.9509',
            lng: '-34.4618',
          },
        },
        profilePictureUrl: 'https://picsum.photos/200?id=2',
        phone: '010-692-6593 x09125',
        website: 'anastasia.net',
        company: {
          name: 'Deckow-Crist',
          catchPhrase: 'Proactive didactic contingency',
          bs: 'synergize scalable supply-chains',
        },
        status: 'WAITING',
        birthDate: 699296400000,
        salary: 234250285,
        favoriteNumber: 7,
      },
      {
        id: 7,
        name: 'Kurtis Weissnat',
        username: 'Elwyn.Skiles',
        email: 'Telly.Hoeger@billy.biz',
        address: {
          street: 'Rex Trail',
          suite: 'Suite 280',
          city: 'Howemouth',
          zipcode: '58804-1099',
          geo: {
            lat: '24.8918',
            lng: '21.8984',
          },
        },
        profilePictureUrl: 'https://picsum.photos/200?id=7',
        phone: '210.067.6132',
        website: 'elvis.io',
        company: {
          name: 'Johns Group',
          catchPhrase: 'Configurable multimedia task-force',
          bs: 'generate enterprise e-tailers',
        },
        status: 'APPROVED',
        birthDate: 699296400000,
        salary: 45485038053,
        favoriteNumber: 88,
      },
    ];
    this.tableModel.setSelectedRecords(records);
  }

  public buildTablePostModel(): void {
    this.tablePostModel = new TableModel(this.moduleCode, [
      {
        field: 'title',
        header: 'Title',
      },
      {
        field: 'body',
        header: 'Body',
      },
    ]);
  }

  public handleRemoveSelectedRow(): void {
    this.tableModel.selectedRecords.forEach((record) => {
      this.httpClient
        .delete(`http://localhost:3000/users/${record.id}`)
        .subscribe(() => {
          this.tableModel.reset();
        });
    });
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

  public handleFilter(): void {
    this.tableModel.setCustomdata(this.formGroup.value);
    this.tableModel.reload();
  }

  public handleReset(): void {
    this.tableModel.setCustomdata(null);
    this.tableModel.reload();
  }
}
