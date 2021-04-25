import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TariffBenefitPipe} from "./tariff-benefit.pipe";

@NgModule({
  declarations: [ TariffBenefitPipe ],
  imports: [ CommonModule ],
  exports: [ TariffBenefitPipe ]
})
export class TariffBenefitModule {}
