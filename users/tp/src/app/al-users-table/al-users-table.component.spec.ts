import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlUsersTableComponent } from './al-users-table.component';

describe('AlUsersTableComponent', () => {
  let component: AlUsersTableComponent;
  let fixture: ComponentFixture<AlUsersTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlUsersTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlUsersTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
