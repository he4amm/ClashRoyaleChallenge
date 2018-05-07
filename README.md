# ClashRoyaleChallenge

Angular6 app represents the deck of cards for Clash Royale game using Clash API.
### Check the live version: https://he4amm.github.io/ClashRoyaleChallenge/

![alt text](https://raw.githubusercontent.com/he4amm/ClashRoyaleChallenge/master/src/assets/app-screenshot.png)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.0.

## Development server

- Run `npm install` once you downloaded the repo.
- Go to app directory.
- Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Components

`AppBodyComponent`: The main and root component which holds the core functionality of the app of waiting for the resolve service to return the data of cards and start to generate the random cards to pass it to the child components.

`AppHeaderComponent`: This component is responsible to represent the header part of the deck, it contains the title and the Generate button which it passes the click action to the parent component to start to generate new random cards for the deck.

`AppFooterComponent`: This component is responsible to represent the footer part of the deck, it calculates and represents the average cost of elixir cost of all generated random cards which are passed from the parent component.

`CardComponent`: This component is responsible to represent the card info (image, name, rarity, description, elixir cost and type), it makes the preload process of the image before showing it and until that it shows spinner GIF as placeholder, it also responsible of showing the full details view of card when user click on it.

## Why Angular especially v6?

- First, Angular is the best choice for me for that kind of apps as it contains all modules you need (HttpClientModule, RouterModule, BrowserModule ...etc) to implement the app and there is no need to implement 3rd party libraries.
- Second, Angular6 has just been released and I was very excited to play with it and discover the new stuff they bring in, so it was a good chance to do it :D
