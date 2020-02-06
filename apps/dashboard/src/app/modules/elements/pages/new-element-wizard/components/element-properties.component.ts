import { Component, OnInit } from '@angular/core';
import { BaseWizardStepComponent, WizardService } from '@nx-ngrx-seed/wizard';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'nx-ngrx-seed-element-properties',
  template: `
    <p>
      element-properties works!
    </p>
    <div [formGroup]="myForm">
      <label>
      graph type : <input type="text" formControlName="type">
</label>
<label>
      units : <input type="text" formControlName="units">
</label>

</div>
    {{currentWizardStep | json}}
  `,
  styles: []
})
export class ElementPropertiesComponent extends BaseWizardStepComponent implements OnInit {

  constructor(private wizardService: WizardService, private fb: FormBuilder) {
    super(wizardService, fb);
  }

  init() {
    this.myForm = this.fb.group({
      type: ['', Validators.required],
      units: ['', Validators.required]
    })

    

  }

}