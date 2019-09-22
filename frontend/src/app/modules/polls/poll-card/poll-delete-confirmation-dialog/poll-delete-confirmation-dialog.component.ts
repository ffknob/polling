import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

import { PollDeleteConfirmationDialogData } from '@modules/polls/poll-card/poll-delete-confirmation-dialog/poll-delete-confirmation-dialog-data';
import { Poll } from '@shared/models/poll.model';

import { PollsService } from '@root/core/services/polls.service';

@Component({
  selector: 'app-poll-delete-confirmation-dialog',
  templateUrl: './poll-delete-confirmation-dialog.component.html',
  styleUrls: ['./poll-delete-confirmation-dialog.component.scss']
})
export class PollDeleteConfirmationDialogComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<PollDeleteConfirmationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private data: PollDeleteConfirmationDialogData,
    private snackBar: MatSnackBar,
    private pollsService: PollsService) {}

  ngOnInit() {}

  cancel(): void {
    this.dialogRef.close();
  }

  confirm(): void {
    this.pollsService
      .deleteById(this.data._id)
      .subscribe(
        poll => {
          this.pollsService.fetch();
          this.dialogRef.close();
          this.snackBar.open('Poll deleted', 'Dismiss', {
            duration: 2000,
          });
        },
        err => {
          this.dialogRef.close();
          this.snackBar.open('An error occurred trying to delete poll', 'Dismiss', {
            duration: 2000,
          });
        });
  }
}
