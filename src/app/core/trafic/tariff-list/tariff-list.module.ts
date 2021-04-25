import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TariffListComponent } from "./tariff-list.component";
import { TariffListItemModule } from "../tariff-list-item/tariff-list-item.module";


@NgModule({
  declarations: [TariffListComponent ],
  exports: [ TariffListComponent ],
  imports: [
    CommonModule,
    TariffListItemModule,
  ]
})
export class TariffListModule { }
