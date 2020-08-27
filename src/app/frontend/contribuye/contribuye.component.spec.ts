import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContribuyeComponent } from './contribuye.component';

describe('ContribuyeComponent', () => {
  let component: ContribuyeComponent;
  let fixture: ComponentFixture<ContribuyeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContribuyeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContribuyeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
