import { Injectable } from '@angular/core';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class NgidPopupService {
  constructor(private ngbModal: NgbModal) {}
  public open(
    component: any,
    config?: object,
    options?: NgbModalOptions
  ): Observable<any> {
    const defaultOptions: NgbModalOptions = { centered: true, size: 'sm' };

    const optionsAssign = { ...defaultOptions, ...options };

    const modal = this.ngbModal.open(component, optionsAssign);
    Object.assign(modal.componentInstance, config);
    return modal.dismissed;
  }
}
