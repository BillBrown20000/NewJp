import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhereYouCanWorkComponent } from './where-you-can-work.component';

describe('WhereYouCanWorkComponent', () => {
  let component: WhereYouCanWorkComponent;
  let fixture: ComponentFixture<WhereYouCanWorkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhereYouCanWorkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhereYouCanWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
