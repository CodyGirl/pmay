import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { extract } from '@app/core';
import { LandingComponent } from './landing/landing.component';

const routes: Routes = [
  { path: 'start', component: LandingComponent, data: { title: extract('Start') } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class StartRoutingModule { }
