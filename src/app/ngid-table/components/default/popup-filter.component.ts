import { Component, Input, TemplateRef } from '@angular/core';
@Component({
  templateUrl: './popup-filter.component.html',
})
export class PopupFilterComponent {
  @Input() headerFilterTmpl: TemplateRef<any>;
}
