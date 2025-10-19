import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'acf-vendors',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './vendors.html',
  styleUrls: ['./vendors.css']
})
export class Vendors {
  foodVendor = {
    title: 'Festival Food Vendors',
    image: '/images/vendors/food.jpg',
    button: {
      label: 'Apply Online',
      link: 'https://www.austincelticfestival.com/food-vendor-application'
    }
  };
  merchVendor = {
    title: 'Celtic Merchandise Vendors',
    image: '/images/vendors/merch.jpg',
    button: {
      label: 'Apply Online',
      link: 'https://www.austincelticfestival.com/merchandise-vendor-application-form'
    }
  };
}
