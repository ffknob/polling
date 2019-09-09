import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PollsComponent } from './polls/polls.component';
import { PollCreateComponent } from './poll-create/poll-create.component';

const routes: Routes = [
  { path: '', component: PollsComponent,
    children: [
      { path: 'create', component: PollCreateComponent }
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PollsRoutingModule { }
