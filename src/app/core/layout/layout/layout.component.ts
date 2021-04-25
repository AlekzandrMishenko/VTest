import {ChangeDetectionStrategy, Component } from '@angular/core';

import { HEADER_TITLE } from "../../../utils/constants/dataflow.consts";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayoutComponent {

  public headerTitle = HEADER_TITLE;

}
