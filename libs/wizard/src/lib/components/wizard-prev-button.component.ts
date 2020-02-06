import { Component, OnInit } from '@angular/core';
import { WizardService } from '../services/wizard.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'nx-ngrx-seed-wizard-prev-button',
  template: `
      <button (click)="prev()" [disabled]="(canNotNavigateToPrevStep$ | async)">PREV</button>

  `,
  styles: []
})
export class WizardPrevButtonComponent implements OnInit {
  constructor(private wizardService: WizardService) { }

  canNotNavigateToPrevStep$ = this.wizardService.getCanNavigateToPrevStep().pipe(map(res => !res));
  
  ngOnInit() {
  }
  prev() {
    this.wizardService.goPrevStep();
  }
}
