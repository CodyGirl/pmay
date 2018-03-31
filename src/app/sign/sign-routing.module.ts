import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { extract } from '@app/core';
import { SignComponent } from './sign.component';

const routes: Routes = [
  { path: 'sign', component: SignComponent, data: { title: extract('Sign') } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class SignRoutingModule { }
