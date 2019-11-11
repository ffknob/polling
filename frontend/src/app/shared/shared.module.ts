import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QRCodeModule } from 'angularx-qrcode';

import { QrCodeComponent } from './qr-code/qr-code.component';

@NgModule({
  declarations: [
    QrCodeComponent
  ],
  imports: [
    CommonModule,
    QRCodeModule
  ],
  exports: [
    QrCodeComponent
  ]
})
export class SharedModule { }