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
          MatSnackBarModule
          /*
          MatGridListModule,
          MatIconRegistry,
          MatExpansionModule,
          MatToolbarModule,
          MatSidenavModule,
          MatRadioModule,
          MatTableModule,
          MatCheckboxModule,
          MatTabsModule,
          MatBadgeModule,
          MatTooltipModule,
          MatChipsModule,
          MatDividerModule,
          MatProgressBarModule,
          MatProgressSpinnerModule,
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
    MatSnackBarModule/*
    MatGridListModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatToolbarModule,
    MatSidenavModule,
    MatRadioModule,
    MatTableModule,
    MatCheckboxModule,
    MatTabsModule,
    MatDialogModule,
    MatBadgeModule,
    MatTooltipModule,
    MatChipsModule,
    MatDividerModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
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
    MatSnackBarModule/*
    MatGridListModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatToolbarModule,
    MatSidenavModule,
    MatRadioModule,
    MatTableModule,
    MatCheckboxModule,
    MatTabsModule,
    MatBadgeModule,
    MatTooltipModule,
    MatChipsModule,
    MatDividerModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
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