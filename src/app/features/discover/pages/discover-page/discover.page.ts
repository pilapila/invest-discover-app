import { Component, signal } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonSearchbar } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { StockCardComponent } from '../../../../components/stock-card/stock-card.component';
import { BuyModalComponent } from '../../../../components/buy-modal/buy-modal.component';
import { PortfolioService } from "../../../../services/portfolio-service/portfolio.service";
import { BuyOrder, TrendingStock } from "../../../../models/stock/stock.interface";

@Component({
  selector: 'app-discover-page',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    CommonModule,
    FormsModule,
    StockCardComponent,
    BuyModalComponent,
    IonSearchbar
  ],
})
export class DiscoverPage {
  selectedStock = signal<TrendingStock | null>(null);
  isBuyModalOpen = signal<boolean>(false);
  trendingStocks = this.portfolioService.trendingStocks;

  constructor(private portfolioService: PortfolioService) {}

  onStockCardClick(stock: TrendingStock) {
    this.selectedStock.set(stock);
    this.isBuyModalOpen.set(true);
  }

  onCloseBuyModal() {
    this.isBuyModalOpen.set(false);
    this.selectedStock.set(null);
  }

  onBuyOrder(order: BuyOrder) {
    this.portfolioService.executeBuyOrder(order).subscribe({
      next: (newHolding) => {
        console.log('Order executed:', newHolding);
        this.onCloseBuyModal();
      },
      error: (error) => {
        console.error('Order failed:', error);
      }
    });
  }
}
