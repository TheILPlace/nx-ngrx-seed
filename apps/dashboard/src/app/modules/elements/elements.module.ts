import { NgModule } from '@angular/core';
import { ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NewElementWizardComponent } from './pages/new-element-wizard/new-element-wizard.component';
import { ElementsRoutingModule } from './elements-routing.module';
import { ElementsListPageComponent } from './pages/elements-list-page/elements-list-page.component';
import { ElementNameComponent } from './pages/new-element-wizard/components/element-name.component';
import { ElementPropertiesComponent } from './pages/new-element-wizard/components/element-properties.component';
import { ElementDataSourceComponent } from './pages/new-element-wizard/components/element-data-source.component';
import { WizardModule} from '@nx-ngrx-seed/wizard'



@NgModule({
  declarations: [NewElementWizardComponent, ElementsListPageComponent, ElementNameComponent, ElementPropertiesComponent, ElementDataSourceComponent],
  imports: [
    CommonModule, ElementsRoutingModule, ReactiveFormsModule, WizardModule
  ],
  providers: []
})
export class ElementsModule { }
