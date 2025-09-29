import { Injectable, computed } from '@angular/core';
import { Observable, of, delay, map, switchMap } from 'rxjs';
import { mockedStockNames, portfolioSignal, trendingStockSignal} from "../../mock/dashboard-mock-data";
import { BuyOrder, Holding, Portfolio } from "../../models/stock/stock.interface";

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  portfolio = computed(() => portfolioSignal());
  trendingStocks = computed(() => trendingStockSignal());

  executeBuyOrder(order: BuyOrder): Observable<Holding> {
    return of(order).pipe(
      switchMap(orderData =>
        this.getStockName(orderData.symbol).pipe(
          map(stockName => {
            const newHolding: Holding = {
              symbol: orderData.symbol,
              name: stockName,
              currentPrice: orderData.price,
              shares: orderData.shares,
              totalValue: orderData.totalAmount,
              change: 0,
              changePercent: 0,
              type: 'Stock',
              logoUrl: this.getStockLogo(orderData.symbol)
            };

            this.updatePortfolioWithOrder(orderData, newHolding);
            return newHolding;
          })
        )
      )
    );
  }

  private updatePortfolioWithOrder(order: BuyOrder, newHolding: Holding) {
    const currentPortfolio = portfolioSignal();
    const existingHoldingIndex = currentPortfolio.holdings.findIndex(
      h => h.symbol === order.symbol
    );

    let updatedHoldings = [...currentPortfolio.holdings];

    if (existingHoldingIndex >= 0) {
      const existingHolding = currentPortfolio.holdings[existingHoldingIndex];
      const newTotalShares = existingHolding.shares + order.shares;
      const newTotalValue = existingHolding.totalValue + order.totalAmount;
      const newAverageCost = newTotalValue / newTotalShares;

      updatedHoldings[existingHoldingIndex] = {
        ...existingHolding,
        shares: newTotalShares,
        totalValue: newTotalValue,
        averageCost: newAverageCost
      };
    } else {
      updatedHoldings = [newHolding, ...updatedHoldings];
    }

    const updatedPortfolio: Portfolio = {
      ...currentPortfolio,
      holdings: updatedHoldings,
      totalEquity: currentPortfolio.totalEquity + ++order.totalAmount
    };

    portfolioSignal.set(updatedPortfolio);
  }

  getStockNameFromAPI(symbol: string): Observable<string> {
    return this.getStockName(symbol);
  }

  private getStockName(symbol: string): Observable<string> {
    return of(symbol).pipe(
      map(sym => {
        const stockNames: { [key: string]: string } = mockedStockNames;
        return stockNames[sym] || sym;
      })
    );
  }

  private getStockLogo(symbol: string): string {
    return `assets/logos/${symbol.toLowerCase()}.svg`;
  }
}
