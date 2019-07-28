import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MineralesComponent } from './minerales.component';

describe('MineralesComponent', () => {
  let component: MineralesComponent;
  let fixture: ComponentFixture<MineralesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MineralesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MineralesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
