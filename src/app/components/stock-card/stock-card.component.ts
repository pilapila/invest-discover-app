import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonCard, IonCardContent } from '@ionic/angular/standalone';
import { StockTypeBadgeComponent } from '../stock-type-badge/stock-type-badge.component';
import { TrendingStock } from "../../models/stock/stock.interface";

@Component({
  selector: 'app-stock-card',
  templateUrl: './stock-card.component.html',
  styleUrls: ['./stock-card.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonCard,
    IonCardContent,
    StockTypeBadgeComponent
  ]
})
export class StockCardComponent {
  stock = input.required<TrendingStock>();
  cardClick = output<TrendingStock>();

  onCardClick() {
    this.cardClick.emit(this.stock());
  }
}
