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
  @Input() column: TableColumn;
  constructor(
    private elementRef: ElementRef,
    private viewContainerRef: ViewContainerRef
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
      Object.assign(
        componentRef.instance,
        isHasCallbacks
          ? component.callbacksInstance(this.column) || { column: this.column }
          : { column: this.column }
      );
    } else {
      const divTdTextElement = document.createElement('td');
      divTdTextElement.classList.add('td-text');
      divTdTextElement.textContent = this.column.value || '-';
      this.elementRef.nativeElement.appendChild(divTdTextElement);
    }
  }
}
