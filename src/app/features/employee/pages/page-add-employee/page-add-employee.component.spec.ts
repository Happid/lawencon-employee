import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAddEmployeeComponent } from './page-add-employee.component';

describe('PageAddEmployeeComponent', () => {
  let component: PageAddEmployeeComponent;
  let fixture: ComponentFixture<PageAddEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageAddEmployeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageAddEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
