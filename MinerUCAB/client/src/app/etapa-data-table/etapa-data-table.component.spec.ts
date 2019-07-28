import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtapaDataTableComponent } from './etapa-data-table.component';

describe('EtapaDataTableComponent', () => {
  let component: EtapaDataTableComponent;
  let fixture: ComponentFixture<EtapaDataTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtapaDataTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtapaDataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
