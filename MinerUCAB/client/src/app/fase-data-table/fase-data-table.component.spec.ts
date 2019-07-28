import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaseDataTableComponent } from './fase-data-table.component';

describe('FaseDataTableComponent', () => {
  let component: FaseDataTableComponent;
  let fixture: ComponentFixture<FaseDataTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaseDataTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaseDataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
