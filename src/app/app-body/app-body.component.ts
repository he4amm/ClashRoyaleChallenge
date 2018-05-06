import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from './../_services/data.service';
import { Card } from './../card';

@Component({
  selector: 'app-body',
  templateUrl: './app-body.component.html',
  styleUrls: ['./app-body.component.scss']
})
export class AppBodyComponent implements OnInit {
  allDeckcards: Card[];
  randomDeckCards: Card[];
  numOfRandomCards: number;
  cardDetailsActivated: string;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) {
    this.numOfRandomCards = 8;
    this.cardDetailsActivated = '';
  }

  ngOnInit() {
    this.allDeckcards = this.route.snapshot.data.cards;
    this.generateCards();
  }

  generateCards() {
    this.getRandomCards(this.numOfRandomCards, (cards) => {
      this.randomDeckCards = cards;
    });
  }

  getRandomCards(numOfRandomCards: number, callback) {
    const cards = [];
    let randomCard = {};

    while (cards.length !== numOfRandomCards) {
      randomCard = this.allDeckcards[this.getRandomInt(this.allDeckcards.length - 1)];
      if (cards.indexOf(randomCard) === -1) {
        cards.push(randomCard);
      }
    }

    callback(cards);
  }

  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

}
