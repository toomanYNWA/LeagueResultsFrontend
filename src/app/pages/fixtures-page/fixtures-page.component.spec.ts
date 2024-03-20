import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FixturesPageComponent } from './fixtures-page.component';

describe('FixturesPageComponent', () => {
  let component: FixturesPageComponent;
  let fixture: ComponentFixture<FixturesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FixturesPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FixturesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
