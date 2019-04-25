import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlUsersFormComponent } from './al-users-form.component';

describe('AlUsersFormComponent', () => {
  let component: AlUsersFormComponent;
  let fixture: ComponentFixture<AlUsersFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlUsersFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlUsersFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
