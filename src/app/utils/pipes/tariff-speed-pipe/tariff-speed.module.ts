import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TariffSpeedPipe} from "./tariff-speed.pipe";

@NgModule({
  declarations: [ TariffSpeedPipe ],
  imports: [ CommonModule ],
  exports: [ TariffSpeedPipe ]
})
export class TariffSpeedModule {}
