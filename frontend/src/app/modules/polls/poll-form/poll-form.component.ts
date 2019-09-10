import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

import { Poll } from '@shared/models/poll.model';

import { PollsService } from '@root/core/services/polls.service';
import { PollOption } from '@root/shared/models/poll-option.model';

@Component({
  selector: 'app-poll-form',
  templateUrl: './poll-form.component.html',
  styleUrls: ['./poll-form.component.scss']
})
export class PollFormComponent implements OnInit {
  @Input() poll: Poll;

  errors: string[];

  pollForm: FormGroup;
  options: FormArray;

  constructor(private router: Router,
              private pollsService: PollsService) { }

  ngOnInit() {
    let title = null;
    let question = null;
    let options = [];

    if (this.hasPoll()) {
      title = this.poll.title;
      question = this.poll.question;
      options = this.poll.options
        .map(o => new FormControl(o.option, Validators.required));
    } else {
      options.push(new FormControl(null, Validators.required));
    }

    this.createPollForm(title, question, options);
  }

  hasPoll() {
    return this.poll && this.poll.options;
  }

  createPollForm(title, question, options) {
    this.pollForm = new FormGroup({
      title: new FormControl(title),
      question: new FormControl(question),
      options: new FormArray(options)
    });
  }

  createPoll() {
    const title = this.pollForm.value.title;
    const question = this.pollForm.value.question;
    const options = this.pollForm.value.options
      .filter(o => o !== '')
      .map(o => new PollOption(o, null));

    const poll = new Poll(title, question, options);

    this.pollsService
      .create(poll)
      .subscribe(
        createdPoll => {
          this.router.navigateByUrl('/polls/list', { state: { createdPoll: createdPoll } });
        },
        err => this.errors.push(err)
      );
  }

  savePoll() {
    this.poll.title = this.pollForm.value.title;
    this.poll.question = this.pollForm.value.question;
    this.poll.options = this.pollForm.value.options
      .filter(o => o !== '')
      .map(o => new PollOption(o, null));

    this.pollsService
      .save(this.poll)
      .subscribe(
        savedPoll => {
          this.router.navigateByUrl('/polls/list', { state: { savedPoll: savedPoll } });
        },
        err => {this.errors.push(err.message); console.log(err);}
      );
  }

  onAddOption() {
    const newOptionControl = new FormControl(null, Validators.required);
    this.options = this.pollForm.get('options') as FormArray;
    this.options.push(newOptionControl);
  }

  onRemoveOption(index) {
    this.options = this.pollForm.get('options') as FormArray;
    this.options.removeAt(index);
  }

  onSubmit() {
    this.errors = [];

    if (this.poll) {
      this.savePoll();
    } else {
      this.createPoll();
    }
  }
}
