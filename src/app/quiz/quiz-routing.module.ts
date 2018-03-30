import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Route, extract } from '@app/core';
import { QuizComponent } from './quiz.component';

const routes: Routes = [
  Route.withShell([
    { path: 'quiz', component: QuizComponent, data: { title: extract('Quiz') } }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class QuizRoutingModule { }
