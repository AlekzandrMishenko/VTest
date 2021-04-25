import { NgModule } from "@angular/core";

import { CommonModule } from "@angular/common";
import { TariffListItemComponent } from "./tariff-list-item.component";
import { TariffSpeedModule } from "../../../utils/pipes/tariff-speed-pipe/tariff-speed.module";
import { TariffBenefitModule } from "../../../utils/pipes/tariff-benefit-pipe/tariff-benefit.module";


@NgModule({
  declarations: [ TariffListItemComponent ],
  exports: [ TariffListItemComponent ],
  imports: [
    CommonModule,
    TariffSpeedModule,
    TariffBenefitModule,
  ]
})
export class TariffListItemModule { }
