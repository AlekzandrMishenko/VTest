import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TariffListItemComponent } from './tariff-list-item.component';

describe('TarifListItemComponent', () => {
  let component: TariffListItemComponent;
  let fixture: ComponentFixture<TariffListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TariffListItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TariffListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
