import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { I18nService } from '@app/core';
import { finalize } from 'rxjs/operators';
import { environment } from '@env/environment';
import {questions_sd } from './quizData'

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

  version: string = environment.version;

  questions: Array<any>;
  activeQuestion: any;
  activeIndex =0;
  quizInProgress=true;
  constructor(private _http: HttpClient,private i18nService: I18nService) { }

  ngOnInit() {

    console.log('lang',this.i18nService.language);
    this.questions = questions_sd;
    this.activeQuestion = this.questions[this.activeIndex];

  }


  nextQuestion() {
    if(this.activeIndex <= this.questions.length-1)
    {
      this.activeIndex++;
      this.activeQuestion = this.questions[this.activeIndex];
    }
  }

  hasNext() {
    return (this.activeIndex < this.questions.length-1)
  }

  isLast() {
    return this.activeIndex === this.questions.length-1;
  }

  finish() {
    this.quizInProgress = false;
  }


}
