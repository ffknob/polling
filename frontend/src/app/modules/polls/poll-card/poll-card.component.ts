import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { PollDeleteConfirmationDialogComponent } from '@modules/polls/poll-card/poll-delete-confirmation-dialog/poll-delete-confirmation-dialog.component';
import { Poll } from '@root/shared/models/poll.model';

@Component({
  selector: 'app-poll-card',
  templateUrl: './poll-card.component.html',
  styleUrls: ['./poll-card.component.scss']
})
export class PollCardComponent implements OnInit {
  @Input() poll: Poll;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  onDelete(poll: Poll): void {
    const dialogRef = this.dialog.open(PollDeleteConfirmationDialogComponent, {
      data: { _id: poll._id, title: poll.title }
    });
  }
}
