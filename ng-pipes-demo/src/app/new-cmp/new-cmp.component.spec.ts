import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCmpComponent } from './new-cmp.component';

describe('NewCmpComponent', () => {
  let component: NewCmpComponent;
  let fixture: ComponentFixture<NewCmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewCmpComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewCmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
