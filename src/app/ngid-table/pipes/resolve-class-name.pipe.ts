import { Pipe, PipeTransform } from '@angular/core';
import { TableColumn } from '../domain/table-column';
import { TableColumnType } from '../type/table-column.type';

@Pipe({
  name: 'resolveClassName',
})
export class ResolveClassName implements PipeTransform {
  transform(column: TableColumn, targetAttrName: 'td' | 'th'): string {
    const { type } = column.model;
    if (!type) return '';
    return this.createClassName(
      targetAttrName,
      typeof type === 'object' ? type.name : type
    );
  }

  private createClassName(
    targetAttrName: 'td' | 'th',
    type: TableColumnType
  ): string {
    return `${targetAttrName}-content-${type}`;
  }
}
