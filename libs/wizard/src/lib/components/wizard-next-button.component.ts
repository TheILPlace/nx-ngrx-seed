import { Component, OnInit } from '@angular/core';
import { WizardService } from '../services/wizard.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'nx-ngrx-seed-wizard-next-button',
  template: `
    <button  class="btn btn-success"  (click)="next()" [disabled]="(currentStepNotValid$ | async)">NEXT</button>
    <button  class="btn btn-success"  (click)="next()" >NEXT ANYWAY</button>
<br>

  `,
  styles: []
})
export class WizardNextButtonComponent implements OnInit {

  constructor(private wizardService: WizardService) { }

  currentStepNotValid$ = this.wizardService.getCurrentStepValid().pipe(map(val => !val));
  

  ngOnInit() {

  }

  next() {
    this.wizardService.nextStep$.next();
  }

  
}
