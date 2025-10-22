import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { NgIf } from '@angular/common';

export interface AcfInfoDialogData {
  title: string;
  image?: string;
  content: string;
}

@Component({
  selector: 'acf-info-dialog',
  standalone: true,
  imports: [MatDialogModule, MatIconModule, NgIf],
  template: `
    <div class="acf-info-dialog-content">
      <div class="acf-info-dialog-header">
        <button mat-icon-button mat-dialog-close class="acf-info-dialog-close-btn" aria-label="Close dialog">
          <mat-icon>close</mat-icon>
        </button>
      </div>
      <div class="acf-info-dialog-scroll">
        <h2 class="acf-info-dialog-title">{{ data.title }}</h2>
        <div *ngIf="data.image" class="acf-info-dialog-image-wrapper">
          <img [src]="data.image" [alt]="data.title" class="acf-info-dialog-image" />
        </div>
        <div class="acf-info-dialog-body" [innerHTML]="data.content"></div>
      </div>
    </div>
  `,
  styleUrl: './acf-info-dialog.css'
})
export class AcfInfoDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<AcfInfoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: AcfInfoDialogData
  ) {}
}
