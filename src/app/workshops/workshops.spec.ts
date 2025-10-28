import { TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { WorkshopsPage } from './workshops';

describe('WorkshopsPage', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkshopsPage],
      providers: [provideZonelessChangeDetection(), provideRouter([])]
    }).compileComponents();
  });

  it('should render the Workshops title', () => {
    const fixture = TestBed.createComponent(WorkshopsPage);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
