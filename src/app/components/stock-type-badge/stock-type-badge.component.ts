import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-stock-type-badge',
  templateUrl: './stock-type-badge.component.html',
  styleUrls: ['./stock-type-badge.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class StockTypeBadgeComponent {
  type = input<string>('Stock');
}
