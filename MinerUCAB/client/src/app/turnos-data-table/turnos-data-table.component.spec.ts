import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TurnosDataTableComponent } from './turnos-data-table.component';

describe('TurnosDataTableComponent', () => {
  let component: TurnosDataTableComponent;
  let fixture: ComponentFixture<TurnosDataTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TurnosDataTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TurnosDataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
