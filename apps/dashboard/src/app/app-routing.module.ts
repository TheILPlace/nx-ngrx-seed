import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'elements', loadChildren: () => import('./modules/elements/elements.module').then(m => m.ElementsModule)},
  { path: '**', redirectTo: 'elements' }

];

@NgModule({
  
  imports: [RouterModule.forRoot(routes, {enableTracing:false})],
  exports: [RouterModule]
})
export class AppRoutingModule { }