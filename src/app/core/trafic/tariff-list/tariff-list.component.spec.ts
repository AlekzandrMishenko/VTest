import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TariffListComponent } from './tariff-list.component';
import { TariffsService } from "../../../utils/services/tariffs.service";
import { EMPTY } from "rxjs";
import { TariffListItemModule } from "../tariff-list-item/tariff-list-item.module";
import {HttpClientModule} from "@angular/common/http";


describe('TariffListComponent', () => {
  let component: TariffListComponent;
  let fixture: ComponentFixture<TariffListComponent>;
  let service: TariffsService;
  const offersList = [
    { contractTerm: { downloadSpeed: { amount: '3200' }, uploadSpeed: { amount: '2000' }} },
    { contractTerm: { downloadSpeed: { amount: '3300' }, uploadSpeed: { amount: '2300' }} },
  ]

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientModule, TariffListItemModule ],
      declarations: [ TariffListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TariffListComponent);
    service = new TariffsService(null);
    component = fixture.componentInstance;
    spyOn(service, 'getTariffList').and.callFake(() => {
      return EMPTY
    });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
