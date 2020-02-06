import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { WizardService } from './wizard.service';

@Injectable({providedIn:'root'})
export class WizardStepGuard implements CanActivate {
    constructor(private wizardService: WizardService, private router: Router) { };
    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | boolean {


        return true;

        // const stepNo = route.data.stepNumber;

        // if (stepNo === '1') return true;

        // if (this.wizardService.getSnapshot().wizardSteps[+stepNo - 1].isValid) {
        //     return true;

        // } else {
        //     const currentUrl = this.router.url.split('/');
        //     currentUrl.splice(-1, 1);

        //     this.router.navigate([...currentUrl, +stepNo - 1]);
        //     return true;

        // }


        // return true;
    }
}
