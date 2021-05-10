import { Component, h, State } from '@stencil/core';
// import axios from 'axios';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
  shadow: true,
})
export class AppHome {
  cardImageUrls = [
    'butterfly.jpg',
    'dog.jpg',
    'fox.jpg',
    'giraffe.jpg',
    'kingfisher.jpg',
    'kitten.jpg',
    'panda.jpg',
    'puppy.jpg',
    'tiger.jpg',
    'turtle.jpg'
  ];
  @State() cardDeck = [];

  // componentWillLoad(){
  //   for(let i = 0; i < 8; i++){
  //     axios.get(`https://picsum.photos/200?random=${i}`)
  //       .then(response => {
  //         this.cardImages.push(response.request.responseURL)
  //       })
  //   }
  // }


  render() {
    return (
      <div class="app-home">
        <p>
          Welcome to the Stencil App Starter. You can use this starter to build entire apps all with web components using Stencil! Check out our docs on{' '}
          <a href="https://stenciljs.com">stenciljs.com</a> to get started.
        </p>
      </div>
    );
  }
}
