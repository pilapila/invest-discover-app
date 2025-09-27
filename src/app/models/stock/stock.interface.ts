export interface Stock {
  symbol: string;
  name: string;
  currentPrice: number;
  previousClose?: number;
  change?: number;
  changePercent?: number;
  logoUrl?: string;
  type: 'Stock' | 'ETF' | 'Crypto' | 'Bond';
}

export interface Holding extends Stock {
  shares: number;
  totalValue: number;
  averageCost?: number;
  unrealizedGain?: number;
  unrealizedGainPercent?: number;
}

export interface TrendingStock extends Stock {
  volume?: number;
  marketCap?: number;
  isHot?: boolean;
}

export interface Portfolio {
  totalEquity: number;
  totalGain: number;
  totalGainPercent: number;
  holdings: Holding[];
}

export interface BuyOrder {
  symbol: string;
  shares: number;
  price: number;
  orderType: 'market' | 'limit';
  totalAmount: number;
}
