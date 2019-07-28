import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompraAliadoComponent } from './compra-aliado.component';

describe('CompraAliadoComponent', () => {
  let component: CompraAliadoComponent;
  let fixture: ComponentFixture<CompraAliadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompraAliadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompraAliadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
