import { WizardStep } from './wizard-step';

export class WizardConfig {
    wizardName: string;
    currentStep: number;
    currentStepValid: boolean;
    wizardSteps: Array<WizardStep>;
}