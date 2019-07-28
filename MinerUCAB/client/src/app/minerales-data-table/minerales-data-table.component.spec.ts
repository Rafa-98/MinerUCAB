import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MineralesDataTableComponent } from './minerales-data-table.component';

describe('MineralesDataTableComponent', () => {
  let component: MineralesDataTableComponent;
  let fixture: ComponentFixture<MineralesDataTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MineralesDataTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MineralesDataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
