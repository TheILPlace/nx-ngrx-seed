import { Component, OnInit } from '@angular/core';
import { WizardService } from '../../services/wizard.service';

@Component({
  selector: 'nx-ngrx-seed-wizard-header',
  templateUrl: './wizard-header.component.html',
  styleUrls: ['./wizard-header.component.css']
})
export class WizardHeaderComponent implements OnInit {

  constructor(private wizardService: WizardService) { }

  wizardConfig$ = this.wizardService.getWizardConfig();
  ngOnInit() {
  }

}
