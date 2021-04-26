import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { TariffListComponent } from "./tariffs/tariff-list/tariff-list.component";
import { TariffListItemComponent } from "./tariffs/tariff-list-item/tariff-list-item.component";
import { SharedModule } from "../shared/shared.module";
import { TariffsSortComponent } from './tariffs/tariffs-sort/tariffs-sort.component';
import { TariffsItemSpeedComponent } from './tariffs/tariffs-item-speed/tariffs-item-speed.component';
import { TariffsItemBenefitComponent } from './tariffs/tariffs-item-benefit/tariffs-item-benefit.component';
import { TariffsItemPriceComponent } from './tariffs/tariffs-item-price/tariffs-item-price.component';


@NgModule({
  declarations: [
    TariffListComponent,
    TariffListItemComponent,
    TariffsSortComponent,
    TariffsItemSpeedComponent,
    TariffsItemBenefitComponent,
    TariffsItemPriceComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [
    TariffListComponent,
    TariffListItemComponent,
    TariffsSortComponent,
  ]
})

export class FeatureModule { }
