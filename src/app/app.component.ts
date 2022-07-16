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
  constructor() {}

  ngOnInit(): void {
    this.buildFormGroup();
    this.buildTableModel();
    this.buildTablePostModel();
  }

  private buildFormGroup(): void {
    this.formGroup = new FormGroup({
      status: new FormControl(null),
    });
  }

  private buildTableModel(): void {
    this.tableModel = new TableModel(this.moduleCode, [
      {
        field: 'profilePictureUrl',
        plugins: {
          name: 'img',
          rounded: true,
          onClick: (record: any) => {
            console.log('INFO: Come from img clicked');
            console.log(record);
          },
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
        customClass: 'text-end justify-content-end',
        plugins: {
          name: 'default',
          beforeCreate: (column: TableColumn): void => {
            column.value = column.record.username + ' CustomValue';
          },
          afterCreate: (element: HTMLElement) => {
            const tdContentDefaultElement =
              element.getElementsByClassName('td-content-default')[0];
            if (tdContentDefaultElement) {
              tdContentDefaultElement.classList.add('bg-warning', 'text-white');
            }
          },
        },
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
    ]);
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
