import { Directive, ElementRef, OnDestroy, AfterViewInit, Renderer2, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: '[acfCardGridSizer]',
  standalone: true,
})
export class AcfCardGridSizer implements AfterViewInit, OnDestroy {
  private host = inject(ElementRef<HTMLElement>);
  private r = inject(Renderer2);
  private platformId = inject(PLATFORM_ID);
  private readonly isBrowser = isPlatformBrowser(this.platformId);
  private resizeObs?: () => void;
  private mo?: MutationObserver;
  private imgUnsubs: Array<() => void> = [];

  ngAfterViewInit(): void {
    if (!this.isBrowser) {
      // Do nothing on the server/prerender
      return;
    }
    // Defer to ensure content has rendered
    setTimeout(() => this.recompute(), 0);
    setTimeout(() => this.recompute(), 150); // catch late image layout
    setTimeout(() => this.recompute(), 350);
    // Recompute after fonts finish loading (prevents height drift)
    try {
      // Safari/Chromium support Font Loading API
      const anyDoc = document as any;
      if (anyDoc?.fonts?.ready) {
        anyDoc.fonts.ready.then(() => this.recompute()).catch(() => {});
      }
    } catch {}

    // Recompute on window resize
    this.resizeObs = this.r.listen('window', 'resize', () => this.recompute());
    this.r.listen('window', 'orientationchange', () => this.recompute());

    // Recompute when card content changes (e.g., images load)
    if (typeof MutationObserver !== 'undefined') {
      this.mo = new MutationObserver(() => this.recompute());
      this.mo.observe(this.host.nativeElement, { childList: true, subtree: true });
    }

    // Also listen for image load events inside the grid
    const imgs = Array.from(this.host.nativeElement.querySelectorAll('img')) as HTMLImageElement[];
    for (const img of imgs) {
      const u1 = this.r.listen(img, 'load', () => this.recompute());
      const u2 = this.r.listen(img, 'error', () => this.recompute());
      this.imgUnsubs.push(u1, u2);
    }
  }

  ngOnDestroy(): void {
    if (!this.isBrowser) return;
    if (this.resizeObs) this.resizeObs();
    if (this.mo) this.mo.disconnect();
    for (const u of this.imgUnsubs) try { u(); } catch {}
  }

  private recompute(): void {
    if (!this.isBrowser) return;
    const root = this.host.nativeElement;
    const cards = Array.from(root.querySelectorAll('.acf-card')) as HTMLElement[];
    const titles = Array.from(root.querySelectorAll('.acf-card-title')) as HTMLElement[];
    const bodies = Array.from(root.querySelectorAll('.acf-card-content')) as HTMLElement[];

    // Clear previous global CSS vars to avoid whole-grid stretching
    this.r.setStyle(root, '--acf-card-title-min-h', `0px`);
    this.r.setStyle(root, '--acf-card-content-min-h', `0px`);
    this.r.setStyle(root, '--acf-card-total-min-h', `0px`);

    // Reset per-card styles so we measure natural size
    for (const el of cards) {
      this.r.setStyle(el, 'height', 'auto');
    }
    for (const el of titles) {
      (el.style as any).minHeight = '';
    }
    for (const el of bodies) {
      (el.style as any).minHeight = '';
    }

    // Group cards by their visual row using offsetTop
    const rows = new Map<number, HTMLElement[]>();
    for (const card of cards) {
      const top = card.offsetTop;
      const key = Math.round(top); // normalize minor subpixel differences
      const list = rows.get(key) ?? [];
      list.push(card);
      rows.set(key, list);
    }

    // For each row: compute max heights and apply to that row only
    for (const [, rowCards] of rows) {
      let rowMax = 0;
      let rowTitleMax = 0;
      let rowBodyMax = 0;
      // measure
      for (const c of rowCards) {
        rowMax = Math.max(rowMax, c.offsetHeight);
        const t = c.querySelector('.acf-card-title') as HTMLElement | null;
        const b = c.querySelector('.acf-card-content') as HTMLElement | null;
        if (t) rowTitleMax = Math.max(rowTitleMax, t.offsetHeight);
        if (b) rowBodyMax = Math.max(rowBodyMax, b.offsetHeight);
      }
      // apply
      for (const c of rowCards) {
        this.r.setStyle(c, 'height', `${rowMax}px`);
        const t = c.querySelector('.acf-card-title') as HTMLElement | null;
        const b = c.querySelector('.acf-card-content') as HTMLElement | null;
        if (t) (t.style as any).minHeight = `${rowTitleMax}px`;
        if (b) (b.style as any).minHeight = `${rowBodyMax}px`;
      }
    }
  }

  // Estimate static chrome (image box, paddings, borders) from a sample card
  private estimateStaticSpace(sample?: HTMLElement): number {
    if (!sample) return 0;
    try {
      const style = getComputedStyle(sample);
      const pt = parseFloat(style.paddingTop || '0');
      const pb = parseFloat(style.paddingBottom || '0');
      const bt = parseFloat(style.borderTopWidth || '0');
      const bb = parseFloat(style.borderBottomWidth || '0');
      const imageBox = sample.querySelector('.acf-card-image-box') as HTMLElement | null;
      const imageH = imageBox ? imageBox.offsetHeight : 0;
      return pt + pb + bt + bb + imageH + 16 /* small buffer */;
    } catch {
      return 0;
    }
  }
}
