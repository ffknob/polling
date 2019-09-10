import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LayoutModule } from '@angular/cdk/layout';

import { PollsService } from './services/polls.service';
import { AuthenticationComponent } from './authentication/authentication.component';

import { CoreRoutingModule } from './core.routing';

import { MaterialModule } from '@root/material.module';

import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AuthenticationComponent,
    NavbarComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CoreRoutingModule,
    LayoutModule,
    MaterialModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ],
  providers: [
    PollsService
  ]
})
export class CoreModule { }
