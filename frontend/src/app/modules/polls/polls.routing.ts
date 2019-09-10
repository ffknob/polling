import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PollsComponent } from '@modules/polls/polls/polls.component';
import { PollsListComponent } from '@modules/polls/polls-list/polls-list.component';
import { PollCreateComponent } from '@modules/polls/poll-create/poll-create.component';
import { PollEditComponent } from '@modules/polls/poll-edit/poll-edit.component';

const routes: Routes = [
    { path: '', component: PollsComponent,
        children: [
            { path: 'list', component: PollsListComponent },
            { path: 'create', component: PollCreateComponent },
            { path: 'edit/:id', component: PollEditComponent }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PollsRoutingModule { }
