import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

import { Poll } from '@shared/models/poll.model';

import { PollsService } from '@root/core/services/polls.service';

@Component({
  selector: 'app-poll-vote',
  templateUrl: './poll-vote.component.html',
  styleUrls: ['./poll-vote.component.scss']
})
export class PollVoteComponent implements OnInit {
  poll: Poll;

  voteForm: FormGroup;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private pollsService: PollsService) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];

    if (id) {
      this.pollsService
        .findById(id)
        .subscribe(
          (poll: Poll) => {
            this.poll = poll;
            this.createVoteForm();
          },
          err => { throw err; }
        );
    } else {
      //this.router.navigateByUrl('/polls/list', { state : { } });
      console.log('error');
    }
  }

  createVoteForm() {
    this.voteForm = new FormGroup({});
  }
}
