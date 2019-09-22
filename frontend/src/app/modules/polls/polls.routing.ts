import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PollsComponent } from '@modules/polls/polls/polls.component';
import { PollsListComponent } from '@modules/polls/polls-list/polls-list.component';
import { PollCreateComponent } from '@modules/polls/poll-create/poll-create.component';
import { PollEditComponent } from '@modules/polls/poll-edit/poll-edit.component';
import { PollVoteComponent } from '@modules/polls/poll-vote/poll-vote.component';

const routes: Routes = [
    { path: '', component: PollsComponent },
    { path: 'list', component: PollsListComponent },
    { path: 'create', component: PollCreateComponent },
    { path: 'edit/:id', component: PollEditComponent },
    { path: 'vote/:id', component: PollVoteComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PollsRoutingModule { }
