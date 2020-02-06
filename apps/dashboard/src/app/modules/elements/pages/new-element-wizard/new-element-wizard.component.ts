import { Component, OnInit } from '@angular/core';
import { NewElementService } from '../../services/new-element-service';
import { WizardService, WizardStep } from '@nx-ngrx-seed/wizard';
import { NEW_ELEMENT_INITIAL_STATE } from './new-element-wizard-config';

@Component({
  selector: 'nx-ngrx-seed-new-element-wizard',
  templateUrl: './new-element-wizard.component.html',
  styleUrls: ['./new-element-wizard.component.css'],
  
})
export class NewElementWizardComponent implements OnInit {

  constructor(private wizardService: WizardService) { }

  currentStepValid$ = this.wizardService.getCurrentStepValid();
  canNavigateToPrevStep$ = this.wizardService.getCanNavigateToPrevStep();
  

  ngOnInit() {
    this.wizardService.init(NEW_ELEMENT_INITIAL_STATE);

  }

 
}
