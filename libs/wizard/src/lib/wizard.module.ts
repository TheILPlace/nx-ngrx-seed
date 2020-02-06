import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { CommonModule } from '@angular/common';
import { BaseWizardStepComponent } from './components/base-wizard-step.component';
import { WizardHeaderComponent } from './components/wizard-header/wizard-header.component';
import { WizardNextButtonComponent } from './components/wizard-next-button.component';
import { WizardPrevButtonComponent } from './components/wizard-prev-button.component';

@NgModule({
  declarations: [BaseWizardStepComponent, WizardHeaderComponent, WizardNextButtonComponent, WizardPrevButtonComponent],
  imports: [CommonModule, RouterModule],
  exports: [BaseWizardStepComponent, WizardHeaderComponent,WizardNextButtonComponent, WizardPrevButtonComponent]
  
})
export class WizardModule {}
