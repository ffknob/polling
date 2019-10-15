import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from '@root/material.module';

import { NgxChartsModule } from '@swimlane/ngx-charts';

import { PollsRoutingModule } from './polls.routing';

import { PollsListComponent } from './polls-list/polls-list.component';
import { PollsComponent } from './polls/polls.component';
import { PollCreateComponent } from './poll-create/poll-create.component';
import { PollEditComponent } from './poll-edit/poll-edit.component';
import { PollFormComponent } from './poll-form/poll-form.component';
import { PollCardComponent } from './poll-card/poll-card.component';
import { PollDeleteConfirmationDialogComponent } from './poll-card/poll-delete-confirmation-dialog/poll-delete-confirmation-dialog.component';
import { PollVoteComponent } from './poll-vote/poll-vote.component';

@NgModule({
  declarations: [
    PollsListComponent,
    PollsComponent,
    PollCreateComponent,
    PollEditComponent,
    PollFormComponent,
    PollCardComponent,
    PollDeleteConfirmationDialogComponent,
    PollVoteComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MaterialModule,
    NgxChartsModule,
    PollsRoutingModule
  ],
  entryComponents: [
    PollDeleteConfirmationDialogComponent
  ]
})
export class PollsModule { }
