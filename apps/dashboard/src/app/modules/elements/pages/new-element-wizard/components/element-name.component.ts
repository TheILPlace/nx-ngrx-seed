import { Component, OnInit } from '@angular/core';
import { BaseWizardStepComponent, WizardService } from '@nx-ngrx-seed/wizard';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'nx-ngrx-seed-element-name',
  template: `
    <p>
      element-name works!
    </p>
    <div [formGroup]="myForm">
      <label>
      name: <input type="text" formControlName="name">
</label>

</div>
    {{currentWizardStep | json}}
  `,
  styles: []
})
export class ElementNameComponent extends BaseWizardStepComponent implements OnInit {

  constructor(private wizardService: WizardService, private fb: FormBuilder) {
    super(wizardService, fb);
  }

  init() {
    this.myForm = this.fb.group({
      name: ['', Validators.required]
    })
    this.registerEvents();

   

  }

  showError() {
    const msg = "form not valid";
    alert(msg);
  }

}
