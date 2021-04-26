import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';

import { Subscription } from "rxjs";
import { filter } from "rxjs/operators";

import { TariffsService } from "../../../shared/services/tariffs.service";
import { IOffer, ITariffs } from "../../../shared/interfaces/tarif.interfaces";


@Component({
  selector: 'app-tariff-list',
  templateUrl: './tariff-list.component.html',
  styleUrls: ['./tariff-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TariffListComponent implements OnInit, OnDestroy {

  public offersList: IOffer[];

  private tariffList$: Subscription;

  constructor(
    private tariffsService: TariffsService,
    private cdr: ChangeDetectorRef,
   ) { }

  ngOnInit(): void {
    this.tariffList$ = this.tariffsService.getTariffList()
      .pipe(filter(Boolean))
      .subscribe(({ offers }: ITariffs) => {
      this.offersList = offers;

      this.cdr.markForCheck();
    })
  }

  ngOnDestroy(): void {
    this.tariffList$.unsubscribe();
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
