import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyAssignmentModalComponent } from './modify-assignment-modal.component';

describe('ModifyAssignmentModalComponent', () => {
  let component: ModifyAssignmentModalComponent;
  let fixture: ComponentFixture<ModifyAssignmentModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifyAssignmentModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyAssignmentModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
