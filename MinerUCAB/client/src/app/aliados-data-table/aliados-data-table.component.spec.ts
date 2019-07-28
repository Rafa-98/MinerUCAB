import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AliadosDataTableComponent } from './aliados-data-table.component';

describe('AliadosDataTableComponent', () => {
  let component: AliadosDataTableComponent;
  let fixture: ComponentFixture<AliadosDataTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AliadosDataTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AliadosDataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
