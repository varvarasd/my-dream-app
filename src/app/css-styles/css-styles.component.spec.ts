import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CssStylesComponent } from './css-styles.component';

describe('CssStylesComponent', () => {
  let component: CssStylesComponent;
  let fixture: ComponentFixture<CssStylesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CssStylesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CssStylesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
