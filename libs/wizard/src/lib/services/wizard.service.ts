import { Injectable } from '@angular/core';
import { Store} from '@nx-ngrx-seed/core';
import { Observable, BehaviorSubject, Subject } from 'rxjs';
import { WizardStep } from '../models/wizard-step';
import { WizardConfig } from '../models/wizard-config';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Injectable({providedIn:'root'})
export class WizardService extends Store<WizardConfig>{
    
    constructor(private router: Router) {
        super('WIZARD', undefined);
    }

    nextStep$ = new Subject<void>();

    init(wizardConfig: WizardConfig) {
        this.updateState('[WIZARD] Init',wizardConfig )
    }
    
    getWizardConfig(): Observable<WizardConfig> {
        return this.select();
    }

    getwizardName(): Observable<string> {
        return this.select(s => s.wizardName);
    }

    getCurrentWizardStep(): Observable<WizardStep> {
        return this.select(s => s.wizardSteps.find(ws => ws.stepNo === s.currentStep));
    }

    goPrevStep() {
        const currentStepNumber = this.getSnapshot().currentStep;
        if (currentStepNumber === 0) return;
        this.setState('[NewElement] Go Prev Step', (s => ({...s, currentStep: s.currentStep-1})));
        
       
            const prevStep = this.getSnapshot().wizardSteps.find(ws => ws.stepNo === currentStepNumber - 1);

           
            const currentUrl = this.router.url.split('/');
            currentUrl.splice(-1,1);
            
            this.router.navigate([...currentUrl, prevStep.path]);
            
        
    }

    updateWizardStep(wizardStep: WizardStep, formValue: any, navigateNextStep: boolean) {
        this.setState('[NewElement] Update Step Completed',
            (s => ({
                ...s, currentStep: s.currentStep+1, currentStepValid: false, wizardSteps: s.wizardSteps.map(ws =>
                    ws.stepNo === wizardStep.stepNo ? {...wizardStep, stepData: formValue, isValid: true } : ws)

                     })
            ));

            // check to see if we can navigate to the next step
            if (navigateNextStep) {
                if (!wizardStep.isLastStep) {
                    const nextStep = this.getSnapshot().wizardSteps.find(ws => ws.stepNo === wizardStep.stepNo + 1);
                    const currentUrl = this.router.url.split('/');
                    currentUrl.splice(-1,1);
                    
                    this.router.navigate([...currentUrl, nextStep.path]);
                    
                }
            }


    }

    setCurrentStepValid(valid: boolean) {
        this.updateState('[WIZARD] Current Step Valid', {currentStepValid: valid});
    }

    getCurrentStepValid(): Observable<boolean> {
        return this.select(s=>s.currentStepValid);
    }

    getCanNavigateToPrevStep(): Observable<boolean> {
        return this.select(s=> s.currentStep).pipe(
            map(cs => cs > 1)
        )
    }

}