import { Component, OnInit, OnDestroy,  AfterViewChecked } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { WizardStep } from '../models/wizard-step';
import { cloneDeep } from 'lodash';
import { Subscription } from 'rxjs';
import { take } from 'rxjs/operators';
import { WizardService } from '../services/wizard.service';

@Component({
  selector: 'nx-ngrx-seed-base-wizard-step',
  template: ``,
  styles: []
})
export class BaseWizardStepComponent implements OnInit, OnDestroy {
  currentWizardStep: WizardStep;
  sub: Subscription;
  statusSub: Subscription;
  myForm: FormGroup;
  _wizardService;
  _fb;
  currentStatus = '';

  constructor(wizardService: WizardService, fb: FormBuilder) {
    this._wizardService = wizardService;
    this._fb = fb;
    //this.myForm = this._fb.group({});
  }

  ngOnInit() {
    this.initBase();
    
    this.init();
  }

  init() { };

  showError() {}

  initBase() {

    this._wizardService.getCurrentWizardStep().pipe(take(1))
      .subscribe(ws => {
        this.currentWizardStep = cloneDeep(ws);
      });



    this.sub = this._wizardService.nextStep$.subscribe(() => {
      if (this.myForm.valid) {
        this._wizardService.updateWizardStep(this.currentWizardStep, this.myForm.value, true);
      } else {
        this.showError();
      }

    })

    //this.init2();

  }

  registerEvents() {

    this.statusSub = this.myForm.statusChanges.subscribe(s => {
      if (s !== this.currentStatus) {
        this._wizardService.setCurrentStepValid(s === 'VALID' ? true : false);
        this.currentStatus = s;
      }
    })

    if (this.currentWizardStep.stepData) {
      this.myForm.patchValue(this.currentWizardStep.stepData);
    }



  }
  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
    if (this.statusSub) {
      this.statusSub.unsubscribe();
    }
  }

}
