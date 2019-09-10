import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';

import { MaterialModule } from './material.module';

import { CoreModule } from '@core/core.module';
import { SharedModule } from '@shared/shared.module';
import { ModulesModule } from '@modules/modules.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    MaterialModule,
    CoreModule,
    SharedModule,
    ModulesModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
