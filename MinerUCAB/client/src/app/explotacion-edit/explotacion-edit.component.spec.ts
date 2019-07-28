import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExplotacionEditComponent } from './explotacion-edit.component';

describe('ExplotacionEditComponent', () => {
  let component: ExplotacionEditComponent;
  let fixture: ComponentFixture<ExplotacionEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExplotacionEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExplotacionEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
