import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PollDeleteConfirmationDialogComponent } from './poll-delete-confirmation-dialog.component';

describe('PollDeleteConfirmationDialogComponent', () => {
  let component: PollDeleteConfirmationDialogComponent;
  let fixture: ComponentFixture<PollDeleteConfirmationDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PollDeleteConfirmationDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PollDeleteConfirmationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
