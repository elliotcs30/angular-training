import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FontSize4Component } from './font-size4.component';

describe('FontSize4Component', () => {
  let component: FontSize4Component;
  let fixture: ComponentFixture<FontSize4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FontSize4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FontSize4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
