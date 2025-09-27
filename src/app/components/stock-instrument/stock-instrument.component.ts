import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Holding } from "../../models/stock/stock.interface";

@Component({
  selector: 'app-stock-instrument',
  templateUrl: './stock-instrument.component.html',
  styleUrls: ['./stock-instrument.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class StockInstrumentComponent {
  holding = input.required<Holding>();
  isNew = input<boolean>(false);
  buyClick = output<Holding>();

  getChangeColor(): string {
    const holding = this.holding();
    if (holding.changePercent && holding.changePercent > 0) {
      return 'positive';
    } else if (holding.changePercent && holding.changePercent < 0) {
      return 'negative';
    }
    return 'neutral';
  }
}
