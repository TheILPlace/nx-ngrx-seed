import { Component, OnInit } from '@angular/core';
import { BaseWizardStepComponent, WizardService } from '@nx-ngrx-seed/wizard';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'nx-ngrx-seed-element-data-source',
  template: `
    <p>
      element-data-source works!
    </p>
    <div [formGroup]="myForm">
      <label>
      source: <input type="text" formControlName="source">
</label>

</div>
    {{currentWizardStep | json}}
  `,
  styles: []
})
export class ElementDataSourceComponent extends BaseWizardStepComponent implements OnInit  {

  constructor(private wizardService: WizardService, private fb: FormBuilder) {
    super(wizardService, fb);
  }

  init() {
    this.myForm = this.fb.group({
      source: ['', Validators.required]
    })
    this.registerEvents();

    this.registerEvents();

  }

}
