import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { map, catchError } from 'rxjs/operators';
import {I18nService} from '../../core/i18n.service'

const routes = {
  topics:'/public/getTopics',
  topicid : '/public/getId'
};


@Injectable()
export class TopicService {

  constructor(private httpClient: HttpClient,private i18nService: I18nService) { }

  getTopics(): Observable<any> {
    const headers = new HttpHeaders()
      .set("lang", this.i18nService.languageName);
    return this.httpClient
      .cache()
      .get(routes.topics, {headers})
      .pipe(
        map((body: any) => body),
        catchError(() => of('Error, could not load joke :-('))
      );
  }

  getSelectedTop() {

  }

}
