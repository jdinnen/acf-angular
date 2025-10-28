import { Component, Input, Output, EventEmitter, inject } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';

@Component({
  selector: 'acf-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './acf-card.html',
  styleUrls: ['./acf-card.css']
})
export class AcfCard {
  @Input() image = '';
  @Input() title = '';
  @Input() content = '';
  @Input() clickable = false;
  @Input() href?: string;

  @Output() activate = new EventEmitter<void>();

  private readonly doc = inject(DOCUMENT);

  get resolvedImage(): string {
    return this.resolveAssetUrl(this.image);
  }

  private resolveAssetUrl(path: string): string {
    if (!path) return path;
    // External or data URLs: leave unchanged
    if (/^(https?:|data:|blob:)/i.test(path)) return path;
    // If the path is absolute, prefix with the <base href> path (project pages subpath)
    if (path.startsWith('/')) {
      const baseHref = this.getBasePath();
      const baseNoSlash = baseHref.endsWith('/') ? baseHref.slice(0, -1) : baseHref;
      return `${baseNoSlash}${path}`;
    }
    // Relative paths work with <base href> automatically
    return path;
  }

  private getBasePath(): string {
    try {
      const baseTag = this.doc?.querySelector('base');
      const href = (baseTag?.getAttribute('href') || '/').trim();
      // Convert to pathname only (e.g., '/acf-angular/')
      const u = new URL(href, 'https://example.com');
      return u.pathname || '/';
    } catch {
      return '/';
    }
  }

  onActivate(evt: Event) {
    evt.preventDefault();
    if (this.clickable && !this.href) {
      this.activate.emit();
    }
  }
}
