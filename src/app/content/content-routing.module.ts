import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { extract } from '@app/core';
import { ContentComponent } from './content.component';

const routes: Routes = [
{ path: 'content', component: ContentComponent, data: { title: extract('Content') } }
];

@NgModule({
imports: [RouterModule.forChild(routes)],
exports: [RouterModule],
providers: []
})
export class ContentRoutingModule { }