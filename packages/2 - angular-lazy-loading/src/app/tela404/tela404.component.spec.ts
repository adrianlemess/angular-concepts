import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tela404Component } from './tela404.component';

describe('Tela404Component', () => {
  let component: Tela404Component;
  let fixture: ComponentFixture<Tela404Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tela404Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tela404Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
