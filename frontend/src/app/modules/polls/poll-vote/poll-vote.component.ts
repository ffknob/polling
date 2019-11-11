import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup } from '@angular/forms';

import { Poll } from '@shared/models/poll.model';

import { PollsService } from '@root/core/services/polls.service';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-poll-vote',
  templateUrl: './poll-vote.component.html',
  styleUrls: ['./poll-vote.component.scss']
})
export class PollVoteComponent implements OnInit {
  pollId: string;
  poll: Poll;
  poll$: Observable<Poll>;

  results: any;
  chartResults: any;
  results$: Observable<any>;

  voteForm: FormGroup;

  errors: string[];
  hasVoted: boolean = false;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private pollsService: PollsService) { }

  ngOnInit() {
    this.pollId = this.route.snapshot.params['id'];

    if (this.pollId) {
      this.poll$ = new Observable<Poll>((observer: Observer<Poll>) => {
        this.pollsService
          .findById(this.pollId)
          .subscribe(
            (poll: Poll) => {
              this.poll = poll;
              observer.next(poll);
            },
            err => { throw err; }
          );
      });
    } else {
      //this.router.navigateByUrl('/polls/list', { state : { } });
      console.log('error');
    }

    this.createVoteForm();
  }

  createVoteForm() {
    this.voteForm = new FormGroup({});
  }

  getChartResults() {
    this.results$ = new Observable<any>((observer: Observer<any>) => {
      this.pollsService
      .getResults(this.pollId)
      .subscribe(
        (results: any) => {
          this.chartResults = results.map(r => ({ name: r.option, value: r.voteCount}));
          observer.next(this.chartResults);
        },
        err => { throw err; }
      );
    });
  }

  onSubmit() {
    this.errors = [];
    this.hasVoted = true;
    this.getChartResults();
  }
}
