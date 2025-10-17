// Add Material icon import
import { MatIconModule } from '@angular/material/icon';
import { Component, ViewChild, inject } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule, MatSidenav } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
import { NAV_CONFIG, NavItem } from './nav-config';


interface NavItemWithExpand extends NavItem {
  expanded?: boolean;
}
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, MatToolbarModule, MatMenuModule, MatButtonModule, MatIconModule, MatSidenavModule, MatDividerModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class HeaderComponent {
  nav: NavItemWithExpand[];
  @ViewChild(MatSidenav, { static: true }) sidenav!: MatSidenav;
  currentUrl: string;

  constructor(private router: Router) {
    // Add expanded property to items with children
    this.nav = NAV_CONFIG.map(item => item.children ? { ...item, expanded: false } : { ...item });
    this.currentUrl = this.router.url;
    this.router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) this.currentUrl = e.urlAfterRedirects || e.url;
    });
  }

  toggleSidenav() {
    if (this.sidenav) {
      this.sidenav.toggle();
    }
  }

  closeSidenav() {
    if (this.sidenav) {
      this.sidenav.close();
    }
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
