
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TicketsComponent } from './tickets';
import { By } from '@angular/platform-browser';
import { provideZonelessChangeDetection } from '@angular/core';

describe('TicketsComponent', () => {
  let fixture: ComponentFixture<TicketsComponent>;
  let component: TicketsComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TicketsComponent],
      providers: [provideZonelessChangeDetection()]
    }).compileComponents();
    fixture = TestBed.createComponent(TicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the Tickets component', () => {
    expect(component).toBeTruthy();
  });

  it('should render the main card and title', () => {
    const card = fixture.nativeElement.querySelector('.tickets-main-card');
    expect(card).toBeTruthy();
    const title = fixture.nativeElement.querySelector('.tickets-title');
    expect(title).toBeTruthy();
    expect(title.textContent).toContain('Purchase your tickets online');
  });

  it('should render the Buy Now button with correct href', () => {
    const buyBtn = fixture.nativeElement.querySelector('.tickets-buy-btn');
    expect(buyBtn).toBeTruthy();
    expect(buyBtn.getAttribute('href')).toContain('austincelticfestival.com');
    expect(buyBtn.textContent).toContain('Buy Now');
  });

  it('should render both accordion panels', () => {
    const accordions = fixture.nativeElement.querySelectorAll('mat-accordion');
    expect(accordions.length).toBe(2);
    const panels = fixture.nativeElement.querySelectorAll('mat-expansion-panel');
    expect(panels.length).toBe(2);
    // Panel titles
    const panelTitles = fixture.nativeElement.querySelectorAll('mat-panel-title');
    expect(panelTitles[0].textContent).toContain('TICKET INSTRUCTIONS');
    expect(panelTitles[1].textContent).toContain('LEGAL NOTICE');
  });

  // Optionally, test expansion logic if needed (Angular Material handles this, but we can simulate click)
  it('should expand the first accordion panel when header is clicked', () => {
    const panelHeaders = fixture.nativeElement.querySelectorAll('mat-expansion-panel-header');
    expect(panelHeaders.length).toBeGreaterThan(0);
    panelHeaders[0].click();
    fixture.detectChanges();
    // Content should be present (panel is expanded)
    const panelContent = fixture.nativeElement.querySelectorAll('.tickets-panel-content');
    expect(panelContent.length).toBeGreaterThan(0);
  });
});
