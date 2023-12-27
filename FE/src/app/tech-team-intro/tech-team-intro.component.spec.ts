import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechTeamIntroComponent } from './tech-team-intro.component';

describe('TechTeamIntroComponent', () => {
  let component: TechTeamIntroComponent;
  let fixture: ComponentFixture<TechTeamIntroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TechTeamIntroComponent]
    });
    fixture = TestBed.createComponent(TechTeamIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
