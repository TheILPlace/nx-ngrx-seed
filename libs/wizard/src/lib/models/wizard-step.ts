export class WizardStep {
    stepNo: number;
    title: string;
    mandatory: boolean;
    isValid: boolean;
    isLastStep: boolean;
    path: string;
    component: any;
    guards: Array<any>;
    resolvers: Array<any>;
    stepData: any;
}
