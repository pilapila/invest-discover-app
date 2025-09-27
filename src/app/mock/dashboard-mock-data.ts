import { Portfolio, TrendingStock } from "../models/stock/stock.interface";
import { signal, WritableSignal } from "@angular/core";

export const portfolioSignal: WritableSignal<Portfolio> = signal({
  totalEquity: 8636,
  totalGain: 1234.56,
  totalGainPercent: 16.67,
  holdings: [
    {
      symbol: 'NVDA',
      name: 'NVIDIA Corporation',
      currentPrice: 3798.44,
      shares: 3.2291,
      totalValue: 12265.12,
      change: 32.90,
      changePercent: 32.90,
      type: 'Stock',
      logoUrl: 'assets/logos/nvda.svg'
    },
    {
      symbol: 'GOOGL',
      name: 'Alphabet Inc.',
      currentPrice: 301.72,
      shares: 1.3036,
      totalValue: 393.12,
      change: 2.90,
      changePercent: 2.90,
      type: 'Stock',
      logoUrl: 'assets/logos/googl.svg'
    },
    {
      symbol: 'ABNB',
      name: 'Airbnb Inc.',
      currentPrice: 50.72,
      shares: 0.160,
      totalValue: 8.12,
      change: 11.90,
      changePercent: 11.90,
      type: 'Stock',
      logoUrl: 'assets/logos/abnb.svg'
    },
    {
      symbol: 'FIG',
      name: 'Figma Inc.',
      currentPrice: 500.00,
      shares: 8.55,
      totalValue: 4275.00,
      change: 0.01,
      changePercent: 0.01,
      type: 'Stock',
      logoUrl: 'assets/logos/fig.svg'
    }
  ]
});

export const trendingStockSignal: WritableSignal<TrendingStock[]> = signal([
  {
    symbol: 'FIG',
    name: 'Figma Inc',
    currentPrice: 58.44,
    change: 2.34,
    changePercent: 4.17,
    type: 'Stock',
    logoUrl: 'assets/logos/fig.svg',
    volume: 1250000,
    isHot: true
  },
  {
    symbol: 'ABNB',
    name: 'Airbnb Pty Ltd',
    currentPrice: 125.03,
    change: -1.25,
    changePercent: -0.99,
    type: 'Stock',
    logoUrl: 'assets/logos/abnb.svg',
    volume: 890000,
    isHot: true
  },
  {
    symbol: 'BABA',
    name: 'Alibaba Group',
    currentPrice: 136.68,
    change: 5.23,
    changePercent: 3.98,
    type: 'Stock',
    logoUrl: 'assets/logos/baba.svg',
    volume: 2100000,
    isHot: true
  }
]);

export const mockedStockNames = {
  'FIG': 'Figma Inc',
  'ABNB': 'Airbnb Inc.',
  'BABA': 'Alibaba Group',
  'NVDA': 'NVIDIA Corporation',
  'GOOGL': 'Alphabet Inc.',
  'AAPL': 'Apple Inc.',
  'MSFT': 'Microsoft Corporation',
  'TSLA': 'Tesla Inc.',
  'AMZN': 'Amazon.com Inc.',
  'META': 'Meta Platforms Inc.'
}
