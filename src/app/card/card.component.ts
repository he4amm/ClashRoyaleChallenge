import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from './../_services/data.service';
import { Card } from './../card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  urlImage: string;
  tmpImg: HTMLImageElement;

  @Input('card') card: Card;
  @Input('cardDetailsActivated') cardDetailsActivated: string;
  @Output() activateCardDetails: EventEmitter<string> = new EventEmitter<string>();

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.preLoadImage(this.card, (image) => {
      this.urlImage = image;
    });
  }

  showCardDetails(id: string) {
    this.activateCardDetails.next(id);
  }

  preLoadImage(card: Card, callback) {
    callback('https://k61.kn3.net/taringa/1/5/6/4/3/3/34/adriano034/944.gif');

    const loaded = () => {
      callback(this.getImageUrl(card));
    };

    this.tmpImg = new Image();
    this.tmpImg.onload = loaded;
    this.tmpImg.src = this.getImageUrl(card);
  }

  getImageUrl(card: Card) {
    return this.dataService.baseUrl + `/images/cards/${card.idName}.png`;
  }

}
