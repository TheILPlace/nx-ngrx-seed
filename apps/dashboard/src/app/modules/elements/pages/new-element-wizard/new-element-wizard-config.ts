import { WizardConfig } from '@nx-ngrx-seed/wizard';
import { Routes } from '@angular/router';
import { ElementNameComponent } from './components/element-name.component';
import { ElementPropertiesComponent } from './components/element-properties.component';
import { ElementDataSourceComponent } from './components/element-data-source.component';

export const NEW_ELEMENT_INITIAL_STATE: WizardConfig = {
    wizardName : 'New Dashboard Element',
    currentStep: 1,
    currentStepValid: false,
    wizardSteps : [
        {
            stepNo: 1,
            title: 'Element Name',
            mandatory: true,
            isValid: false,
            isLastStep: false,
            path: 'name',
            component: ElementNameComponent,
            guards: [],
            resolvers: [],
            stepData: null


        },
        {
            stepNo: 2,
            title: 'Element Properties',
            mandatory: true,
            isValid: false,
            isLastStep: false,
            path: 'properties',
            component: ElementPropertiesComponent,
            guards: [],
            resolvers: [],
            stepData: null


        },
        {
            stepNo: 3,
            title: 'Element Data Source',
            mandatory: true,
            isValid: false,
            isLastStep: true,
            path: 'data-source',
            component: ElementDataSourceComponent,
            guards: [],
            resolvers: [],
            stepData: null


        }
    ]
}

export function getWizardRouting(): Routes {
    return NEW_ELEMENT_INITIAL_STATE.wizardSteps.map(ws => {
        return {path: ws.path, component: ws.component, canActivate: ws.guards, resolver: ws.resolvers, data: {stepNumber: ws.stepNo}} 
    }) as Routes
}