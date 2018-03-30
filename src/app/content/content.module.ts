import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ContentRoutingModule } from './content-routing.module';
import { ContentComponent } from './content.component';

@NgModule({
imports: [
CommonModule,
ReactiveFormsModule,
TranslateModule,
NgbModule,
ContentRoutingModule
],
declarations: [
ContentComponent
]
})
export class ContentModule { }