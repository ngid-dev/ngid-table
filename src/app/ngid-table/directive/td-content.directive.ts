import { CurrencyPipe, DatePipe } from '@angular/common';
import {
  Directive,
  ElementRef,
  Input,
  OnInit,
  ViewContainerRef,
} from '@angular/core';
import { TableColumn } from '../domain/table-column';

@Directive({
  selector: '[tdContent]',
})
export class TdContentDirective implements OnInit {
  public readonly DEFAULT_DATE_FORMAT = 'dd/MM/yyyy';
  public readonly DEFAULT_CURRENCY_DISPLAY = 'Rp ';

  @Input() column: TableColumn;
  constructor(
    private elementRef: ElementRef,
    private viewContainerRef: ViewContainerRef,
    private date: DatePipe,
    private currency: CurrencyPipe
  ) {}

  ngOnInit(): void {
    this.setTextContent();
  }

  private setTextContent(): void {
    if (this.column.model.component) {
      const { component } = this.column.model;
      const isHasCallbacks = typeof component === 'object';
      const componentTarget = isHasCallbacks ? component.target : component;
      const componentRef =
        this.viewContainerRef.createComponent(componentTarget);

      const divElement = document.createElement('div');
      divElement.classList.add('td-content-component');

      Object.assign(
        componentRef.instance,
        isHasCallbacks
          ? component.callbacksInstance(this.column) || { column: this.column }
          : { column: this.column }
      );

      divElement.appendChild(componentRef.location.nativeElement);
      this.elementRef.nativeElement.appendChild(divElement);
    } else {
      const divTdTextElement = document.createElement('div');
      divTdTextElement.classList.add('td-text');
      divTdTextElement.textContent = this.createValue(this.column.value) || '-';
      this.elementRef.nativeElement.appendChild(divTdTextElement);
    }
  }

  private createValue(value: any): any {
    const { type } = this.column.model;
    if (typeof value === 'undefined' || value === null || !type) return value;

    if (typeof type === 'object') {
      if (type.name === 'date') {
        return this.date.transform(
          value,
          type.format || this.DEFAULT_DATE_FORMAT,
          type.timezone,
          type.locale
        );
      } else if (type.name === 'currency') {
        return this.currency.transform(
          value,
          type.currencyCode,
          type.display || this.DEFAULT_CURRENCY_DISPLAY,
          type.digitsInfo,
          type.locale
        );
      } else {
        return value;
      }
    } else {
      if (type === 'date') {
        return this.date.transform(value, this.DEFAULT_DATE_FORMAT);
      } else if (type === 'currency') {
        return this.currency
          .transform(value, '', this.DEFAULT_CURRENCY_DISPLAY, '0.0')
          ?.replace(/,/g, '.');
      } else if (type === 'number') {
        return value;
      }
    }
  }
}
