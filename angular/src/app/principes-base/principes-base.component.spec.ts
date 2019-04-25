import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipesBaseComponent } from './principes-base.component';

describe('PrincipesBaseComponent', () => {
  let component: PrincipesBaseComponent;
  let fixture: ComponentFixture<PrincipesBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrincipesBaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrincipesBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
