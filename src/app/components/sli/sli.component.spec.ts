import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliComponent } from './sli.component';

describe('SliComponent', () => {
  let component: SliComponent;
  let fixture: ComponentFixture<SliComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SliComponent]
    });
    fixture = TestBed.createComponent(SliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
