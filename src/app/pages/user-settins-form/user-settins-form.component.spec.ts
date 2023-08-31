import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSettinsFormComponent } from './user-settins-form.component';

describe('UserSettinsFormComponent', () => {
  let component: UserSettinsFormComponent;
  let fixture: ComponentFixture<UserSettinsFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserSettinsFormComponent]
    });
    fixture = TestBed.createComponent(UserSettinsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
