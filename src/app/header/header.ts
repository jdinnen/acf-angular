// Add Material icon import
import { MatIconModule } from '@angular/material/icon';
import { Component, ViewChild, inject } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
import { NAV_CONFIG, NavItem } from './nav-config';
import { MobileMenuDialogComponent } from './mobile-menu-dialog';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, MatToolbarModule, MatMenuModule, MatButtonModule, MatIconModule, MatDialogModule, MatDividerModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class HeaderComponent {
  nav: NavItem[];
  currentUrl: string;
  constructor(private router: Router, private dialog: MatDialog) {
    this.nav = NAV_CONFIG;
    this.currentUrl = this.router.url;
    this.router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) this.currentUrl = e.urlAfterRedirects || e.url;
    });
  }

  openMobileMenu() {
    const dialogRef = this.dialog.open(MobileMenuDialogComponent, {
      data: { nav: this.nav },
      panelClass: 'mobile-menu-dialog-panel',
      hasBackdrop: true,
      autoFocus: false,
      restoreFocus: false,
      width: '80vw',
      maxWidth: '340px',
      position: { left: '0', top: '0' },
      height: '100vh',
      disableClose: true
    });
    dialogRef.componentInstance.close.subscribe(() => dialogRef.close());
  }

  isActive(path: string) {
    const url = this.currentUrl || '/';
    if (!path) return false;
    if (path === '/') {
      return url === '/' || url === '';
    }
    return url.startsWith(path);
  }

  isActiveForItem(item: NavItem) {
    if (!item) return false;
    if (item.path && this.isActive(item.path)) return true;
    if (item.children) {
      return item.children.some((c: NavItem) => c.path && this.isActive(c.path));
    }
    return false;
  }
}
