import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RolesDataTableComponent } from './roles-data-table.component';

describe('RolesDataTableComponent', () => {
  let component: RolesDataTableComponent;
  let fixture: ComponentFixture<RolesDataTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RolesDataTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RolesDataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
