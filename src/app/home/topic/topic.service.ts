import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { map, catchError } from 'rxjs/operators';

const routes = {
  topics:'/topics'
};


@Injectable()
export class TopicService {

  constructor(private httpClient: HttpClient) { }

  getTopics(): Observable<any> {
    return this.httpClient
      .cache()
      .get(routes.topics)
      .pipe(
        map((body: any) => body),
        catchError(() => of('Error, could not load joke :-('))
      );
  }

}
