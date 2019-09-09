import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Poll } from '@shared/models/poll.model';

import { MiddlewareService } from '@core/services/middleware.service';

@Injectable({
  providedIn: 'root'
})
export class PollsService {

  polls$ = new Subject<Poll[]>();

  private polls: Poll[] = [];

  constructor(private middlewareService: MiddlewareService) { }

  get() {
    return this.polls;
  }

  set(polls) {
    this.polls = polls;
    this.polls$.next(this.polls);
  }

  fetch() {
    const endpoint = '/polls';

    this.middlewareService
      .fetch(endpoint)
      .subscribe(
        polls => this.set(polls),
        err => { throw err; },
        () => console.log('completed')
      );
  }
}
