export class TableColumnModel {
  field?: string;
  header: string;
  childrens?: Array<TableColumnModel>;
  sortable?: boolean;
}
