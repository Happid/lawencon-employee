import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageViewEmployeeComponent } from './page-view-employee.component';

describe('PageViewEmployeeComponent', () => {
  let component: PageViewEmployeeComponent;
  let fixture: ComponentFixture<PageViewEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageViewEmployeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageViewEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
