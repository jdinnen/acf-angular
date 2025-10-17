import { Component, Input, Output, EventEmitter, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavItem } from './nav-config';

@Component({
    selector: 'app-mobile-menu-dialog',
    standalone: true,
    imports: [CommonModule, RouterModule, MatDialogModule, MatButtonModule, MatDividerModule, MatIconModule],
    template: `
    <div class="mobile-sidenav-content">
      <nav class="mobile-nav">
        <ng-container *ngFor="let item of nav; let i = index">
          <div class="mobile-item">
            <div *ngIf="item.children?.length; else mobileSingle" class="mobile-expandable">
              <button mat-button class="mobile-expand-btn mat-mdc-ripple" (click)="toggleExpand(i)" [attr.aria-expanded]="expanded[i]">
                <span>{{ item.label }}</span>
                <mat-icon class="expand-icon" [class.expanded]="expanded[i]">{{ expanded[i] ? 'expand_more' : 'chevron_right' }}</mat-icon>
              </button>
              <mat-divider *ngIf="expanded[i]"></mat-divider>
              <ul *ngIf="expanded[i]" class="mobile-submenu">
                <li *ngFor="let child of item.children">
                  <a mat-button class="mat-mdc-ripple" (click)="close.emit()" [routerLink]="child.path">{{ child.label }}</a>
                </li>
              </ul>
            </div>
            <ng-template #mobileSingle>
              <a mat-button class="mat-mdc-ripple" (click)="close.emit()" [routerLink]="item.path">{{ item.label }}</a>
            </ng-template>
          </div>
        </ng-container>
      </nav>
      <button mat-icon-button class="close-button" (click)="close.emit()" aria-label="Close menu">
        <mat-icon>close</mat-icon>
      </button>
    </div>
  `,
    styleUrls: ['./header.css']
})
export class MobileMenuDialogComponent {
    @Input() nav: NavItem[] = [];
    @Output() close = new EventEmitter<void>();
    expanded: boolean[] = [];

    constructor(@Inject(MAT_DIALOG_DATA) public data: { nav: NavItem[] }) {
        if (data && data.nav) {
            this.nav = data.nav;
        }
    }

    toggleExpand(i: number) {
        this.expanded[i] = !this.expanded[i];
    }
}