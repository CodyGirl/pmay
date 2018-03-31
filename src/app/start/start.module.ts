import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing/landing.component';
import {StartRoutingModule} from './start-routing.module';

@NgModule({
  imports: [
    CommonModule,
    StartRoutingModule
  ],
  declarations: [LandingComponent]
})
export class StartModule { }
