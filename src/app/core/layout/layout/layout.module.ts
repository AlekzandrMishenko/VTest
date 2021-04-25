import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { LayoutComponent } from "./layout.component";
import { TariffListModule } from "../../trafic/tariff-list/tariff-list.module";


@NgModule({
  declarations: [ LayoutComponent ],
  imports: [
    CommonModule,
    TariffListModule,
  ],
  exports: [ LayoutComponent ]
})

export class LayoutModule { }
