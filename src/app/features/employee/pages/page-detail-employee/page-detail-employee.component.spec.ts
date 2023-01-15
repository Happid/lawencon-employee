import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDetailEmployeeComponent } from './page-detail-employee.component';

describe('PageDetailEmployeeComponent', () => {
  let component: PageDetailEmployeeComponent;
  let fixture: ComponentFixture<PageDetailEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageDetailEmployeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageDetailEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
