import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MobileMenuDialogComponent } from './mobile-menu-dialog';
import { NAV_CONFIG } from './nav-config';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

describe('MobileMenuDialogComponent', () => {
  let fixture: ComponentFixture<MobileMenuDialogComponent>;
  let component: MobileMenuDialogComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobileMenuDialogComponent],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: { nav: NAV_CONFIG } },
        provideZonelessChangeDetection(),
  provideRouter([])
      ]
    }).compileComponents();
    fixture = TestBed.createComponent(MobileMenuDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should render all top-level nav items', () => {
    const navEls = fixture.nativeElement.querySelectorAll('.mobile-item');
    // Should match NAV_CONFIG length
    expect(navEls.length).toBe(NAV_CONFIG.length);
  });

  it('should expand/collapse submenus when expand button is clicked', () => {
    // Find first expandable item
    const expandableIdx = NAV_CONFIG.findIndex(i => i.children);
    const expandBtn = fixture.nativeElement.querySelectorAll('.mobile-expand-btn')[0];
    expect(expandBtn).toBeTruthy();
    // Initially not expanded
    expect(component.expanded[expandableIdx]).not.toBeTrue();
    expandBtn.click();
    fixture.detectChanges();
    expect(component.expanded[expandableIdx]).toBeTrue();
    // Submenu should now be in DOM
    const submenu = fixture.nativeElement.querySelector('.mobile-submenu');
    expect(submenu).toBeTruthy();
    // Collapse again
    expandBtn.click();
    fixture.detectChanges();
    expect(component.expanded[expandableIdx]).not.toBeTrue();
  });

  it('should emit close event when close button is clicked', () => {
    spyOn(component.close, 'emit');
    const closeBtn = fixture.nativeElement.querySelector('.close-button');
    expect(closeBtn).toBeTruthy();
    closeBtn.click();
    expect(component.close.emit).toHaveBeenCalled();
  });

  it('should emit close event when a nav link is clicked', () => {
    spyOn(component.close, 'emit');
    // Find first nav link (not expandable)
    const navLinks = fixture.nativeElement.querySelectorAll('.mobile-item a');
    expect(navLinks.length).toBeGreaterThan(0);
    navLinks[0].click();
    expect(component.close.emit).toHaveBeenCalled();
  });
});