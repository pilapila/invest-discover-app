import { Component, input, output, computed, effect, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonModal,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonIcon,
  IonItem,
  IonLabel,
  IonSelect,
  IonSelectOption,
  IonInput,
  IonButtons
} from '@ionic/angular/standalone';
import {BuyOrder, TrendingStock} from "../../models/stock/stock.interface";

@Component({
  selector: 'app-buy-modal',
  templateUrl: './buy-modal.component.html',
  styleUrls: ['./buy-modal.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonModal,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButton,
    IonIcon,
    IonItem,
    IonLabel,
    IonSelect,
    IonSelectOption,
    IonInput,
    IonButtons,
  ]
})
export class BuyModalComponent {
  stock = input.required<TrendingStock | null>();
  isOpen = input<boolean>(false);

  close = output<void>();
  buyOrder = output<BuyOrder>();

  orderType = signal<'market' | 'limit'>('market');
  amount = signal<number>(0);
  shares = signal<number>(0);
  price = signal<number>(0);

  currentPrice = computed(() => this.stock()?.currentPrice || 0);
  isValidOrder = computed(() => {
    return this.amount() > 0 && this.stock() !== null;
  });

  constructor() {
    effect(() => {
      const stock = this.stock();

      if (stock) {
        this.price.set(stock.currentPrice);
        this.calculateShares();
      }
    }, { allowSignalWrites: true });

    effect(() => {
      this.calculateShares();
    }, { allowSignalWrites: true });
  }

  calculateShares() {
    const amount = this.amount();
    const price = this.price();

    if (amount && price) {
      this.shares.set(amount / price);
    }
  }

  onAmountChange(newAmount: number) {
    this.amount.set(newAmount);
  }

  onSharesChange(newShares: number) {
    const price = this.price();

    if (newShares && price) {
      this.amount.set(newShares * price);
    }

    this.shares.set(newShares);
  }

  onOrderTypeChange(newOrderType: 'market' | 'limit') {
    this.orderType.set(newOrderType);
  }

  onClose() {
    this.close.emit();
  }

  onBuy() {
    const stock = this.stock();

    if (!stock) return;

    const order: BuyOrder = {
      symbol: stock.symbol,
      shares: this.shares(),
      price: this.price(),
      orderType: this.orderType(),
      totalAmount: this.amount()
    };

    this.buyOrder.emit(order);
    this.resetModal();
  }

  resetModal() {
    this.orderType.set('market');
    this.amount.set(0);
    this.shares.set(0);
    this.price.set(0);
  }
}
