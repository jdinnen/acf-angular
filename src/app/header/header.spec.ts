import { TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header';
import { provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

describe('HeaderComponent', () => {
    describe('mobile', () => {
        beforeEach(async () => {
            (window as any).innerWidth = 500;
            window.dispatchEvent(new Event('resize'));
            await TestBed.configureTestingModule({
                imports: [HeaderComponent],
                providers: [provideZonelessChangeDetection(), provideRouter([])]
            }).compileComponents();
        });

        it('should render the hamburger menu button and open sidenav on click (mobile)', async () => {
            const fixture = TestBed.createComponent(HeaderComponent);
            fixture.detectChanges();
            await fixture.whenStable();
            const compiled = fixture.nativeElement as HTMLElement;
            const button = compiled.querySelector('.menu-button') as HTMLElement;
            expect(button).toBeTruthy();
            button.style.display = 'inline-flex';
            const component = fixture.componentInstance;
            // Sidenav removed in dialog refactor
            // Sidenav removed in dialog refactor
            button.click();
            fixture.detectChanges();
            await fixture.whenStable();
            // Sidenav removed in dialog refactor
            // Check mobile nav items
            const mobileNav = compiled.querySelector('.mobile-nav');
            expect(mobileNav).toBeTruthy();
            expect(mobileNav!.children.length).toBeGreaterThan(0);
        });
    });

    describe('desktop', () => {
        beforeEach(async () => {
            (window as any).innerWidth = 1200;
            window.dispatchEvent(new Event('resize'));
            await TestBed.configureTestingModule({
                imports: [HeaderComponent],
                providers: [provideZonelessChangeDetection(), provideRouter([])]
            }).compileComponents();
        });

        it('should render the desktop nav bar and nav items, and not show hamburger or sidenav', async () => {
            const fixture = TestBed.createComponent(HeaderComponent);
            fixture.detectChanges();
            await fixture.whenStable();
            const compiled = fixture.nativeElement as HTMLElement;
            // Desktop nav bar should be present
            const navBar = compiled.querySelector('.nav-bar');
            expect(navBar).toBeTruthy();
            // Desktop nav items should be present
            const desktopNav = compiled.querySelector('.desktop-nav');
            expect(desktopNav).toBeTruthy();
            expect(desktopNav!.children.length).toBeGreaterThan(0);
            // Hamburger button should not be visible
            const button = compiled.querySelector('.menu-button');
            expect(button).toBeTruthy();
            if (button) {
                expect(window.getComputedStyle(button).display).toBe('none');
            }
            // Sidenav should not be open
            const component = fixture.componentInstance;
            // Sidenav removed in dialog refactor
            // Sidenav removed in dialog refactor
        });
    });
});