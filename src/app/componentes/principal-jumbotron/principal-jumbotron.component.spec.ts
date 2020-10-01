import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalJumbotronComponent } from './principal-jumbotron.component';

describe('PrincipalJumbotronComponent', () => {
  let component: PrincipalJumbotronComponent;
  let fixture: ComponentFixture<PrincipalJumbotronComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrincipalJumbotronComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrincipalJumbotronComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
