import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { FeatureModule } from "../../../features/feature.module";
import { LayoutComponent } from "./layout.component";


@NgModule({
  declarations: [ LayoutComponent ],
  imports: [
    CommonModule,
    FeatureModule,
  ],
  exports: [ LayoutComponent ]
})

export class LayoutModule { }
