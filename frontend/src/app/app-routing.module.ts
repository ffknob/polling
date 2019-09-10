import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'core', loadChildren: () => import(`@core/core.module`).then(m => m.CoreModule) },
  { path: 'polls', loadChildren: () => import(`@modules/polls/polls.module`).then(m => m.PollsModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
