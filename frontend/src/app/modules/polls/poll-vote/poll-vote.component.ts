import { Component, OnInit } from '@angular/core';

import { Poll } from '@shared/models/poll.model';

import { PollsService } from '@root/core/services/polls.service';

@Component({
  selector: 'app-poll-vote',
  templateUrl: './poll-vote.component.html',
  styleUrls: ['./poll-vote.component.scss']
})
export class PollVoteComponent implements OnInit {

  constructor(private pollsService: PollsService) {}

  ngOnInit() { 
  }
}
