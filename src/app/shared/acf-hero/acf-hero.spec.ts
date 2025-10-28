import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection } from '@angular/core';
import { AcfHero } from './acf-hero';

describe('AcfHero', () => {
  let fixture: ComponentFixture<AcfHero>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcfHero],
      providers: [provideZonelessChangeDetection()]
    }).compileComponents();

    fixture = TestBed.createComponent(AcfHero);
    fixture.componentInstance.src = 'images/sections/workshops.jpg';
    fixture.componentInstance.alt = 'Festival Workshops';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render img with alt text', () => {
    const img: HTMLImageElement | null = fixture.nativeElement.querySelector('img');
    expect(img).toBeTruthy();
    expect(img!.alt).toContain('Festival Workshops');
  });
});
