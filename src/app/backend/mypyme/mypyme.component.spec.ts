import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MypymeComponent } from './mypyme.component';

describe('MypymeComponent', () => {
  let component: MypymeComponent;
  let fixture: ComponentFixture<MypymeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MypymeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MypymeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
