import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { TariffBenefitModule } from "./pipes/tariff-benefit-pipe/tariff-benefit.module";
import { TariffSpeedModule } from "./pipes/tariff-speed-pipe/tariff-speed.module";


@NgModule({
  declarations: [ ],
  imports: [
    CommonModule,
    TariffBenefitModule,
    TariffSpeedModule,
  ],
  exports: [
    TariffBenefitModule,
    TariffSpeedModule,
  ]
})

export class SharedModule { }
