import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';

import { filter } from "rxjs/operators";
import { TariffsService } from "../../../utils/services/tariffs.service";
import { IOffer, ITariffs } from "../../../utils/interfaces/tarif.interfaces";


@Component({
  selector: 'app-tariff-list',
  templateUrl: './tariff-list.component.html',
  styleUrls: ['./tariff-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TariffListComponent implements OnInit {

  public offersList: IOffer[];

  constructor(
    private tariffsService: TariffsService,
    private cdr: ChangeDetectorRef,
   ) { }

  ngOnInit(): void {
    this.tariffsService.getTariffList()
      .pipe(filter(Boolean))
      .subscribe(({ offers }: ITariffs) => {
      this.offersList = offers;

      this.cdr.markForCheck();
    })
  }

  public trackByFn(i: number, item: IOffer): IOffer {
    return item;
  }

  public sortByDownload(): void {
    this.offersList.sort((a, b) => +a.contractTerm.downloadSpeed.amount < +b.contractTerm.downloadSpeed.amount ? 1 : -1);
  }

  public sortByUpload(): void {
    this.offersList.sort((a, b) => +a.contractTerm.uploadSpeed.amount < +b.contractTerm.uploadSpeed.amount ? 1 : -1);
  }

  public sortByPrice(): void {
    this.offersList.sort((a, b) => +a.cost.effectiveCost.amount < +b.cost.effectiveCost.amount ? 1 : -1);
  }
}
