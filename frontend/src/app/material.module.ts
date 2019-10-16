import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {  MatToolbarModule,
          MatButtonModule,
          MatSidenavModule,
          MatInputModule,
          MatFormFieldModule,
          MatListModule,
          MatIconModule,
          MatCardModule,
          MatDialogModule,
          MatSnackBarModule,
          MatRadioModule,
          MatProgressBarModule,
          MatProgressSpinnerModule
          /*
          MatGridListModule,
          MatIconRegistry,
          MatExpansionModule,
          MatToolbarModule,
          MatSidenavModule,
          MatTableModule,
          MatCheckboxModule,
          MatTabsModule,
          MatBadgeModule,
          MatTooltipModule,
          MatChipsModule,
          MatDividerModule,
          MatDatepickerModule,
          MatSelectModule,
MatAutocompleteModule*/ } from '@angular/material';
//import { MatMomentDateModule } from '@angular/material-moment-adapter';
//import { MatButtonToggleModule } from '@angular/material/button-toggle';
//import { OverlayModule } from '@angular/cdk/overlay';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatDialogModule,
    MatSnackBarModule,
    MatRadioModule,
    MatProgressBarModule,
    MatProgressSpinnerModule/*
    MatGridListModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatToolbarModule,
    MatSidenavModule,
    MatTableModule,
    MatCheckboxModule,
    MatTabsModule,
    MatDialogModule,
    MatBadgeModule,
    MatTooltipModule,
    MatChipsModule,
    MatDividerModule,
    MatDatepickerModule,
    MatMomentDateModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatButtonToggleModule,
    OverlayModule*/
  ],
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatDialogModule,
    MatSnackBarModule,
    MatRadioModule,
    MatProgressBarModule,
    MatProgressSpinnerModule/*
    MatGridListModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatToolbarModule,
    MatSidenavModule,
    MatTableModule,
    MatCheckboxModule,
    MatTabsModule,
    MatBadgeModule,
    MatTooltipModule,
    MatChipsModule,
    MatDividerModule,
    MatDatepickerModule,
    MatMomentDateModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatButtonToggleModule,
    OverlayModule*/
  ],
  providers: [
    //MatIconRegistry
  ],
  declarations: []
})
export class MaterialModule { }