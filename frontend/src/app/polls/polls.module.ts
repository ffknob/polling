import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PollsListComponent } from './polls-list/polls-list.component';
import { PollsComponent } from './polls/polls.component';
import { PollCreateComponent } from './poll-create/poll-create.component';

import { PollsRoutingModule } from './polls.routing';

@NgModule({
  declarations: [
    PollsListComponent,
    PollsComponent,
    PollCreateComponent
  ],
  imports: [
    CommonModule,
    PollsRoutingModule
  ]
})
export class PollsModule { }
