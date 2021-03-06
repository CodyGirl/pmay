import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { QuoteService } from './quote.service';
import { TopicService } from './topic/topic.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { TopicComponent } from './topic/topic.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    CoreModule,
    SharedModule,
    HomeRoutingModule,
    NgbModule
  ],
  declarations: [
    HomeComponent,
    TopicComponent
  ],
  providers: [
    QuoteService,
    TopicService
  ]
})
export class HomeModule { }
