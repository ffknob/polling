import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { PollsService } from '@core/services/polls.service';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { Poll } from '@root/shared/models/poll.model';

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
              private pollsService: PollsService) {
     const currentNavigation = this.router.getCurrentNavigation();
     this.createdPoll = currentNavigation && currentNavigation.extras.state ?
                        currentNavigation.extras.state.createdPoll :
                        null;
  }

  ngOnInit() {
    this.pollsSubscription = this.pollsService.polls$
      .subscribe(
        polls => this.polls = polls,
        err => { throw err; }
      );

    this.pollsService.fetch();
  }

}
