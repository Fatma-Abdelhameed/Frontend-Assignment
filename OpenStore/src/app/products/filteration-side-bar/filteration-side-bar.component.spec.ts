import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterationSideBarComponent } from './filteration-side-bar.component';

describe('FilterationSideBarComponent', () => {
  let component: FilterationSideBarComponent;
  let fixture: ComponentFixture<FilterationSideBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterationSideBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterationSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
