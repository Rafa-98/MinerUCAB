import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivilegioDataTableComponent } from './privilegio-data-table.component';

describe('PrivilegioDataTableComponent', () => {
  let component: PrivilegioDataTableComponent;
  let fixture: ComponentFixture<PrivilegioDataTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivilegioDataTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivilegioDataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
