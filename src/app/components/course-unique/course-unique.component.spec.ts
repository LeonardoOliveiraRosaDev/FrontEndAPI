import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseUniqueComponent } from './course-unique.component';

describe('CourseUniqueComponent', () => {
  let component: CourseUniqueComponent;
  let fixture: ComponentFixture<CourseUniqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseUniqueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseUniqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
