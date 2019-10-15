import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Poll } from '@root/shared/models/poll.model';

import { PollsService } from '@root/core/services/polls.service';

@Component({
  selector: 'app-poll-edit',
  templateUrl: './poll-edit.component.html',
  styleUrls: ['./poll-edit.component.scss']
})
export class PollEditComponent implements OnInit {
  poll: Poll;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private pollsService: PollsService) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];

    if (id) {
      this.pollsService
        .findById(id)
        .subscribe(
          (poll: Poll) => this.poll = poll,
          err => { throw err; }
        );
    } else {
      //this.router.navigateByUrl('/polls/list', { state : { } });
      console.log('error');
    }
  }

}
