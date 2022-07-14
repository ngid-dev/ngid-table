import { Component, Input, OnInit } from '@angular/core';
import {
  AllTableColumnTypeModel,
  TypeCurrencyModel,
  TypeDateModel,
} from '../../model/table-column-type.model';
import { TablePluginDataModel } from '../../model/table-plugin-data.model';
import { TableColumnType } from '../../type/table-column.type';

@Component({
  templateUrl: './default.component.html',
})
export class DefaultComponent implements OnInit {
  public readonly DEFAULT_DATE_FORMAT = 'dd/MM/yyyy';
  public readonly DEFAULT_CURRENCY_DISPLAY = 'Rp ';

  @Input() pluginData: TablePluginDataModel;

  public datePipeModel: TypeDateModel;

  public currencyPipeModel: TypeCurrencyModel;

  public type: TableColumnType | undefined;

  constructor() {}

  ngOnInit(): void {
    this.setInitializationState();
  }

  private setInitializationState(): void {
    this.type = this.typeModel?.name;
    if (!this.type) return;
    switch (this.type) {
      case 'currency':
        this.setCurrencyPipeModel();
        break;
      case 'date':
        this.setDatePipeModel();
        break;
      default:
        break;
    }
  }

  private setCurrencyPipeModel(): void {
    const { currencyCode, digitsInfo, display, locale } = (
      this.isColumnModelTypeString ? {} : this.pluginData.column.model.type
    ) as TypeCurrencyModel;
    this.currencyPipeModel = {
      name: 'currency',
      currencyCode: currencyCode || '',
      digitsInfo: digitsInfo || '',
      display: display || '',
      locale: locale || '',
    };
  }

  private setDatePipeModel(): void {
    const { format, locale, timezone } = (
      this.isColumnModelTypeString ? {} : this.pluginData.column.model.type
    ) as TypeDateModel;
    this.datePipeModel = {
      name: 'date',
      format: format || this.DEFAULT_DATE_FORMAT,
      timezone: timezone,
      locale: locale,
    };
  }

  public get typeModel(): AllTableColumnTypeModel | null {
    const { type } = this.pluginData.column.model;
    if (!type) return null;
    return this.isColumnModelTypeString
      ? ({
          name: type,
        } as AllTableColumnTypeModel)
      : (type as AllTableColumnTypeModel);
  }

  public get isColumnModelTypeString(): boolean {
    return typeof this.pluginData.column.model.type === 'string';
  }
}
