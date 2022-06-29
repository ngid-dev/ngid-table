import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { TableColumn } from '../domain/table-column';

@Directive({
  selector: '[tdContent]',
})
export class TdContentDirective implements OnInit {
  @Input() column: TableColumn;
  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    this.setTextContent();
  }

  private setTextContent(): void {
    const divTdTextElement = document.createElement('td');
    divTdTextElement.classList.add('td-text');
    divTdTextElement.textContent = this.column.value || '-';
    this.elementRef.nativeElement.appendChild(divTdTextElement);
  }
}
