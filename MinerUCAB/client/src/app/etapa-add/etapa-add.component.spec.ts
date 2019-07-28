import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtapaAddComponent } from './etapa-add.component';

describe('EtapaAddComponent', () => {
  let component: EtapaAddComponent;
  let fixture: ComponentFixture<EtapaAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtapaAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtapaAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
