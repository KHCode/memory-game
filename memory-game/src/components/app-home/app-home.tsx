import { Component, h, Listen, State } from '@stencil/core';
// import axios from 'axios';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
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
    '/assets/images/turtle.jpg'
  ];
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


  render() {
    return (
      <memory-card
        isRevealed={this.isRevealed}
        cardImage={this.cardImageUrls[1]}
        clickHandler={this.clickHandler}
      ></memory-card>
    );
  }
}
