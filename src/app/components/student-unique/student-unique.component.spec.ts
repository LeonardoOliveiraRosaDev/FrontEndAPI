import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentUniqueComponent } from './student-unique.component';

describe('StudentUniqueComponent', () => {
  let component: StudentUniqueComponent;
  let fixture: ComponentFixture<StudentUniqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentUniqueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentUniqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
