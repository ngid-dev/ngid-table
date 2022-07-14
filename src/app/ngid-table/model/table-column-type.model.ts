export interface TypeCurrencyModel {
  name: 'currency';
  currencyCode?: string | undefined;
  display?: string | boolean | undefined;
  digitsInfo?: string | undefined;
  locale?: string | undefined;
}

export interface TypeDateModel {
  name: 'date';
  format?: string | undefined;
  timezone?: string | undefined;
  locale?: string | undefined;
}

export type AllTableColumnTypeModel = TypeCurrencyModel | TypeDateModel;
