import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuReportesComponent } from './menu-reportes.component';

describe('MenuReportesComponent', () => {
  let component: MenuReportesComponent;
  let fixture: ComponentFixture<MenuReportesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuReportesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuReportesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
