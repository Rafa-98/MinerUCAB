import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VentaClienteComponent } from './venta-cliente.component';

describe('VentaClienteComponent', () => {
  let component: VentaClienteComponent;
  let fixture: ComponentFixture<VentaClienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VentaClienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VentaClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
