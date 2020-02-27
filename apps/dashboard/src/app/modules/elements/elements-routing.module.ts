import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewElementWizardComponent } from './pages/new-element-wizard/new-element-wizard.component';
import { ElementsListPageComponent } from './pages/elements-list-page/elements-list-page.component';
import { getWizardRouting } from './pages/new-element-wizard/new-element-wizard-config';


const routes: Routes = [
    { path: 'list', component: ElementsListPageComponent },
    {
        path: 'new-element', component: NewElementWizardComponent, children: [
            ...getWizardRouting()
        ],
        
    },
    {
        path: 'new-element2', component: NewElementWizardComponent, children: [
            ...getWizardRouting()
        ],
        
    },
    { path: '**', redirectTo: 'list' }

];

@NgModule({

    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ElementsRoutingModule { }