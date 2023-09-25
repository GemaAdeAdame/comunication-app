import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SonComponentComponent } from './son-component.component';

describe('SonComponentComponent', () => {
  let component: SonComponentComponent;
  let fixture: ComponentFixture<SonComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SonComponentComponent]
    });
    fixture = TestBed.createComponent(SonComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
