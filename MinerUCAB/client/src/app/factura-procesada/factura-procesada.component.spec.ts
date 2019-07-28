import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturaProcesadaComponent } from './factura-procesada.component';

describe('FacturaProcesadaComponent', () => {
  let component: FacturaProcesadaComponent;
  let fixture: ComponentFixture<FacturaProcesadaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacturaProcesadaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacturaProcesadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
