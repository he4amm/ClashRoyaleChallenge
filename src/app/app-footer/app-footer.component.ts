import { Component, OnInit, Input } from '@angular/core';
import { Card } from './../card';

@Component({
  selector: 'app-footer',
  templateUrl: './app-footer.component.html',
  styleUrls: ['./app-footer.component.scss']
})
export class AppFooterComponent implements OnInit {
  @Input('cards') cards: Card[] = [];

  constructor() { }

  ngOnInit() {
  }

  getAverageElixir() {
    return ( this.cards.reduce((sum, card) => sum + card['elixirCost'], 0) / this.cards.length );
  }
}
