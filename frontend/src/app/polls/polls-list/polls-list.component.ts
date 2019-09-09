import { Component, OnInit } from '@angular/core';

import { PollsService } from '@core/services/polls.service';
import { Subscription } from 'rxjs';
import { Poll } from '@root/shared/models/poll.model';

@Component({
  selector: 'app-polls-list',
  templateUrl: './polls-list.component.html',
  styleUrls: ['./polls-list.component.scss']
})
export class PollsListComponent implements OnInit {

  private pollsSubscription: Subscription;
  private polls: Poll[] = [];

  constructor(private pollsService: PollsService) { }

  ngOnInit() {
    this.pollsSubscription = this.pollsService.polls$
      .subscribe(
        polls => this.polls = polls,
        err => { throw err; }
      );

    this.pollsService.fetch();
  }

}
