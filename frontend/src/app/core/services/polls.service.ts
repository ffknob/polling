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
        err => { throw err; }
      );
  }

  findById(id) {
    const endpoint = `/polls/${id}`;

    return this.middlewareService
      .get(endpoint);
  }

  create(poll: Poll) {
    const endpoint = '/polls';

    return this.middlewareService
      .post(endpoint, poll);
  }

  save(poll: Poll) {
    const endpoint = `/polls/${poll._id}`;

    return this.middlewareService
      .put(endpoint, poll);
  }

  deleteById(id) {
    const endpoint = `/polls/${id}`;

    return this.middlewareService
      .delete(endpoint);
  }
}
