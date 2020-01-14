import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewItensComponent } from './new-itens.component';

describe('NewItensComponent', () => {
  let component: NewItensComponent;
  let fixture: ComponentFixture<NewItensComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewItensComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewItensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
