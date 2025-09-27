import { Component, signal } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardContent, IonCardHeader, IonCardTitle } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StockInstrumentComponent } from "../../../../components/stock-instrument/stock-instrument.component";
import { BuyModalComponent } from "../../../../components/buy-modal/buy-modal.component";
import { BuyOrder, TrendingStock } from "../../../../models/stock/stock.interface";
import { PortfolioService } from "../../../../services/portfolio-service/portfolio.service";
import { StockCardComponent } from "../../../../components/stock-card/stock-card.component";

@Component({
  selector: 'app-invest',
  templateUrl: './invest.page.html',
  styleUrls: ['./invest.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    CommonModule,
    FormsModule,
    StockInstrumentComponent,
    BuyModalComponent,
    StockCardComponent
  ],
})
export class InvestPage {
  // Signal-based state
  selectedStock = signal<TrendingStock | null>(null);
  isBuyModalOpen = signal<boolean>(false);

  // Computed values from service
  portfolio = this.portfolioService.portfolio;
  trendingStocks = this.portfolioService.trendingStocks;

  constructor(private portfolioService: PortfolioService) {}

  trackBySymbol(index: number, item: any): string {
    return item.symbol;
  }

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
