import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesComponent } from './services/services.component';

import { PollsService } from './services/polls.service';

@NgModule({
  declarations: [ServicesComponent],
  imports: [
    CommonModule
  ],
  providers: [
    PollsService
  ]
})
export class CoreModule { }
