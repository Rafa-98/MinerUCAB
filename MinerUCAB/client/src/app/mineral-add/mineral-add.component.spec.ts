import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MineralAddComponent } from './mineral-add.component';

describe('MineralAddComponent', () => {
  let component: MineralAddComponent;
  let fixture: ComponentFixture<MineralAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MineralAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MineralAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
