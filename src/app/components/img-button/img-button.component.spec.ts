import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgButtonComponent } from './img-button.component';

describe('ImgButtonComponent', () => {
  let component: ImgButtonComponent;
  let fixture: ComponentFixture<ImgButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImgButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImgButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
