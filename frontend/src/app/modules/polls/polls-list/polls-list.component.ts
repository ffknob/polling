import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { Poll } from '@root/shared/models/poll.model';

import { PollsService } from '@core/services/polls.service';
import { PageService } from '@root/core/services/page.service';

@Component({
  selector: 'app-polls-list',
  templateUrl: './polls-list.component.html',
  styleUrls: ['./polls-list.component.scss']
})
export class PollsListComponent implements OnInit {
  private createdPoll: Poll;

  private pollsSubscription: Subscription;
  private polls: Poll[] = [];

  constructor(public router: Router,
              private pollsService: PollsService,
              private pageService: PageService) {
     const currentNavigation = this.router.getCurrentNavigation();
     this.createdPoll = currentNavigation && currentNavigation.extras.state ?
                        currentNavigation.extras.state.createdPoll :
                        null;
  }

  ngOnInit() {
    this.pageService.setIsLoading(true);

    this.pollsSubscription = this.pollsService.polls$
      .subscribe(
        polls => {
          this.pageService.setIsLoading(false);
          this.polls = polls;
        },
        err => {
          this.pageService.setIsLoading(false);
          throw err;
        }
      );

    this.pollsService.fetch();
  }
}