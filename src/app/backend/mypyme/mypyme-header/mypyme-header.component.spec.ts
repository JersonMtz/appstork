import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MypymeHeaderComponent } from './mypyme-header.component';

describe('MypymeHeaderComponent', () => {
  let component: MypymeHeaderComponent;
  let fixture: ComponentFixture<MypymeHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MypymeHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MypymeHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
