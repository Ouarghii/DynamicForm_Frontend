import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEditFieldComponent } from './create-edit-field.component';

describe('CreateEditFieldComponent', () => {
  let component: CreateEditFieldComponent;
  let fixture: ComponentFixture<CreateEditFieldComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateEditFieldComponent]
    });
    fixture = TestBed.createComponent(CreateEditFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
