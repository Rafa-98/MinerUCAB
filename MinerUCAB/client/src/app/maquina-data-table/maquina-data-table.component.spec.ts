import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaquinaDataTableComponent } from './maquina-data-table.component';

describe('MaquinaDataTableComponent', () => {
  let component: MaquinaDataTableComponent;
  let fixture: ComponentFixture<MaquinaDataTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaquinaDataTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaquinaDataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
