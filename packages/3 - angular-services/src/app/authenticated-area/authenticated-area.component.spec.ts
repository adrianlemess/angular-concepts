import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthenticatedAreaComponent } from './authenticated-area.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('AuthenticatedAreaComponent', () => {
  let component: AuthenticatedAreaComponent;
  let fixture: ComponentFixture<AuthenticatedAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([])],
      declarations: [ AuthenticatedAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthenticatedAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
