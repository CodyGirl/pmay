import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { QuizRoutingModule } from './quiz-routing.module';
import { QuizComponent } from './quiz.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    QuizRoutingModule,
  ],
  declarations: [
    QuizComponent
  ]
})
export class QuizModule { }
