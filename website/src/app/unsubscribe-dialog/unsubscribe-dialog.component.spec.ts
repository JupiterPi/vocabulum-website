import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnsubscribeDialogComponent } from './unsubscribe-dialog.component';

describe('UnsubscribeDialogComponent', () => {
  let component: UnsubscribeDialogComponent;
  let fixture: ComponentFixture<UnsubscribeDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnsubscribeDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnsubscribeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
