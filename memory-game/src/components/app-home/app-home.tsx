import { Component, h, Listen, State } from '@stencil/core';
// import axios from 'axios';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.scss',
  shadow: true,
})
export class AppHome {
  cardImageUrls = [
    '/assets/images/butterfly.jpg',
    '/assets/images/dog.jpg',
    '/assets/images/fox.jpg',
    '/assets/images/giraffe.jpg',
    '/assets/images/kingfisher.jpg',
    '/assets/images/kitten.jpg',
    '/assets/images/panda.jpg',
    '/assets/images/puppy.jpg',
    '/assets/images/tiger.jpg',
    '/assets/images/turtle.jpg',
    '/assets/images/butterfly.jpg',
    '/assets/images/dog.jpg',
    '/assets/images/fox.jpg',
    '/assets/images/giraffe.jpg',
    '/assets/images/kingfisher.jpg',
    '/assets/images/kitten.jpg',
    '/assets/images/panda.jpg',
    '/assets/images/puppy.jpg',
    '/assets/images/tiger.jpg',
    '/assets/images/turtle.jpg'
  ];
  memoryCards: Array<HTMLDivElement>;
  shuffledDeck: Array<HTMLDivElement>;

  @State() cardDeck = [];
  @State() isRevealed: boolean = false;

  @Listen('click', {passive: false})
  clickHandler(ev) {
    ev.preventDefault();
    ev.stopPropagation()
    ev.stopImmediatePropagation()
    this.isRevealed = !this.isRevealed;
    console.log('in click handler')
    console.log(this.isRevealed)
    console.dir(ev);
  }

  shuffle(array) {
    var m = array.length, t, i;
  
    // While there remain elements to shuffle…
    while (m) {
  
      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);
  
      // And swap it with the current element.
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }
  
    return array;
  }

  getMemoryCards(){
    this.memoryCards = this.cardImageUrls.map((image)=>{
      return (
        <memory-card
          isRevealed={this.isRevealed}
          cardImage={image}
          clickHandler={this.clickHandler}
        ></memory-card>
      )
    })
    this.shuffledDeck = this.shuffle(this.memoryCards)
    return this.shuffledDeck;
  }

  render() {
    return (
      <div class="table">
        <div class="memory-board">
          {this.getMemoryCards()}
        </div>
      </div>
    );
  }
}
