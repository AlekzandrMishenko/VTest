import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import {IOffer, IRemark} from "../../../utils/interfaces/tarif.interfaces";
import {BenefitsEnum} from "../../../utils/enums/benefits.enum";

@Component({
  selector: 'app-tariff-list-item',
  templateUrl: './tariff-list-item.component.html',
  styleUrls: ['./tariff-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TariffListItemComponent {
  @Input() public offer: IOffer;
  @Input() public index: number;

  public benefitType = BenefitsEnum;

  public trackByFn(i: number, item: IRemark ): IRemark {
    return item;
  }
}
