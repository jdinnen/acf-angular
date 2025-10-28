import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection } from '@angular/core';
import { AcfCard } from './acf-card';

describe('AcfCard', () => {
  let component: AcfCard;
  let fixture: ComponentFixture<AcfCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcfCard],
      providers: [provideZonelessChangeDetection()]
    }).compileComponents();

    fixture = TestBed.createComponent(AcfCard);
    component = fixture.componentInstance;
    component.title = 'Test Title';
    component.image = '/images/test.jpg';
    component.content = 'Test content';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
