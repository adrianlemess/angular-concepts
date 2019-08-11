import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeboxComponent } from './codebox.component';

describe('CodeboxComponent', () => {
  let component: CodeboxComponent;
  let fixture: ComponentFixture<CodeboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
