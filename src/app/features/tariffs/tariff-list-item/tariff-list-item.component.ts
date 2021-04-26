import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IOffer } from "../../../shared/interfaces/tarif.interfaces";


@Component({
  selector: 'app-tariff-list-item',
  templateUrl: './tariff-list-item.component.html',
  styleUrls: ['./tariff-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TariffListItemComponent {
  @Input() public offer: IOffer;
  @Input() public index: number;

}
