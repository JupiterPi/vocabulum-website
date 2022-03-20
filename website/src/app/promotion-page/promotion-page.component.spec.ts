import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotionPageComponent } from './promotion-page.component';

describe('PromotionPageComponent', () => {
  let component: PromotionPageComponent;
  let fixture: ComponentFixture<PromotionPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromotionPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromotionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
