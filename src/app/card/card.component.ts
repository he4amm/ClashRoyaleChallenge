import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from './../_services/data.service';
import { Card } from './../card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input('card') card: Card;
  @Input('cardDetailsActivated') cardDetailsActivated: string;
  @Output() activateCardDetails: EventEmitter<string> = new EventEmitter<string>();

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
  }

  getImageUrl(card: Card) {
    return this.dataService.baseUrl + `/images/cards/${card.idName}.png`;
  }

  showCardDetails( id: string ) {
    this.activateCardDetails.next(id);
  }

}
