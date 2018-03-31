import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { SignRoutingModule } from './sign-routing.module';
import { SignComponent } from './sign.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TranslateModule,
    NgbModule,
    SignRoutingModule
  ],
  declarations: [
    SignComponent
  ]
})
export class SignModule { }
