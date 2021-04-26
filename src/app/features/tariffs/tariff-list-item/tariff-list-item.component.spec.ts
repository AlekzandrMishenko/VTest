import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import { TariffListItemComponent } from './tariff-list-item.component';
import { TariffSpeedModule } from "../../../shared/pipes/tariff-speed-pipe/tariff-speed.module";
import { TariffBenefitModule } from "../../../shared/pipes/tariff-benefit-pipe/tariff-benefit.module";

describe('TariffListItemComponent', () => {
  let component: TariffListItemComponent;
  let fixture: ComponentFixture<TariffListItemComponent>;

  beforeEach(async (() => {
    TestBed.configureTestingModule({
      imports: [
        TariffSpeedModule,
        TariffBenefitModule,
      ],
      declarations: [ TariffListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TariffListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create Download label', () => {
    expect(fixture.nativeElement.querySelector('.tariff-speed__label').textContent).toContain('Download');
  });

  it('should create To Tariff button', () => {
    expect(fixture.nativeElement.querySelector('.tariff-price__btn-label').textContent).toContain('To Tariff');
  });
});
