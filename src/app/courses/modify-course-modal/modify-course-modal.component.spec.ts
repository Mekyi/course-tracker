import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyCourseModalComponent } from './modify-course-modal.component';

describe('ModifyCourseModalComponent', () => {
  let component: ModifyCourseModalComponent;
  let fixture: ComponentFixture<ModifyCourseModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifyCourseModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyCourseModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
