import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '@root/material.module';

import { PollsListComponent } from './polls-list/polls-list.component';
import { PollsComponent } from './polls/polls.component';
import { PollCreateComponent } from './poll-create/poll-create.component';
import { PollEditComponent } from './poll-edit/poll-edit.component';
import { PollFormComponent } from './poll-form/poll-form.component';

import { PollsRoutingModule } from './polls.routing';

@NgModule({
  declarations: [
    PollsListComponent,
    PollsComponent,
    PollCreateComponent,
    PollEditComponent,
    PollFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    PollsRoutingModule
  ]
})
export class PollsModule { }
