import { Component, h, Listen, State } from '@stencil/core';
import { MemoryCard } from '../memory-card/memory-card';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.scss',
  shadow: true,
})
export class AppHome {
  memCardObjects: Array<any> = [
    {
      name: "butterfly",
      imageUrl: "/assets/images/butterfly.jpg",
      isRevealed: false,
      isMatched: false,
      isClicked: false
    },
    {
      name: "dog",
      imageUrl: "/assets/images/dog.jpg",
      isRevealed: false,
      isMatched: false,
      isClicked: false
    },
    {
      name: "fox",
      imageUrl: "/assets/images/fox.jpg",
      isRevealed: false,
      isMatched: false,
      isClicked: false
    },
    {
      name: "giraffe",
      imageUrl: "/assets/images/giraffe.jpg",
      isRevealed: false,
      isMatched: false,
      isClicked: false
    },
    {
      name: "kingfisher",
      imageUrl: "/assets/images/kingfisher.jpg",
      isRevealed: false,
      isMatched: false,
      isClicked: false
    },
    {
      name: "kitten",
      imageUrl: "/assets/images/kitten.jpg",
      isRevealed: false,
      isMatched: false,
      isClicked: false
    },
    {
      name: "panda",
      imageUrl: "/assets/images/panda.jpg",
      isRevealed: false,
      isMatched: false,
      isClicked: false
    },
    {
      name: "puppy",
      imageUrl: "/assets/images/puppy.jpg",
      isRevealed: false,
      isMatched: false,
      isClicked: false
    },
    {
      name: "tiger",
      imageUrl: "/assets/images/tiger.jpg",
      isRevealed: false,
      isMatched: false,
      isClicked: false
    },
    {
      name: "turtle",
      imageUrl: "/assets/images/turtle.jpg",
      isRevealed: false,
      isMatched: false,
      isClicked: false
    },
    {
      name: "butterfly",
      imageUrl: "/assets/images/butterfly.jpg",
      isRevealed: false,
      isMatched: false,
      isClicked: false
    },
    {
      name: "dog",
      imageUrl: "/assets/images/dog.jpg",
      isRevealed: false,
      isMatched: false,
      isClicked: false
    },
    {
      name: "fox",
      imageUrl: "/assets/images/fox.jpg",
      isRevealed: false,
      isMatched: false,
      isClicked: false
    },
    {
      name: "giraffe",
      imageUrl: "/assets/images/giraffe.jpg",
      isRevealed: false,
      isMatched: false,
      isClicked: false
    },
    {
      name: "kingfisher",
      imageUrl: "/assets/images/kingfisher.jpg",
      isRevealed: false,
      isMatched: false,
      isClicked: false
    },
    {
      name: "kitten",
      imageUrl: "/assets/images/kitten.jpg",
      isRevealed: false,
      isMatched: false,
      isClicked: false
    },
    {
      name: "panda",
      imageUrl: "/assets/images/panda.jpg",
      isRevealed: false,
      isMatched: false,
      isClicked: false
    },
    {
      name: "puppy",
      imageUrl: "/assets/images/puppy.jpg",
      isRevealed: false,
      isMatched: false,
      isClicked: false
    },
    {
      name: "tiger",
      imageUrl: "/assets/images/tiger.jpg",
      isRevealed: false,
      isMatched: false,
      isClicked: false
    },
    {
      name: "turtle",
      imageUrl: "/assets/images/turtle.jpg",
      isRevealed: false,
      isMatched: false,
      isClicked: false
    },
  ]
  shuffledDeck: Array<MemoryCard>;
  revealedCards: Array<any> = new Array;

  @State() cardDeck = [];
  @State() isRevealed: boolean = false;
  @State() score: number = 0;
  @State() isMatched: boolean = false;
  // @State() isClicked: boolean = false;

  @Listen('click', {passive: false})
  clickHandler(ev) {
    console.dir(ev)
    this.score++
    console.log(this.score)
  }

  // @Listen('cardClicked', {passive: false})
  // cardClickHandler(ev, currentEl) {//pass the name of the card to this handler
  //   //first check if there was another card clicked, if yes:
  //     //check if this card and the other card have the same name, if yes:
  //       //increment the score by one
  //       //
  //   this.revealedCards = this.shuffledDeck.filter(card => card.isClicked == true)
  //   if(this.revealedCards.length < 2){
  //     currentEl.isRevealed = !currentEl.isRevealed;
  //     this.revealedCards.push(currentEl)
  //     console.dir(this.revealedCards)
  //   }
  //   if(this.revealedCards.length == 2){
  //     if(this.revealedCards[0].name == this.revealedCards[1].name){//check if the cards match
  //       //if so, hide the cards and give the player a point
  //       this.revealedCards[0].style.visibility = 'hidden';
  //       this.revealedCards[1].style.visibility = 'hidden';
  //       this.score++;
  //     }

  //   }
  // }

  componentWillLoad(){
    this.shuffledDeck = this.getMemoryCards();
  }

  //shuffle method taken from here: https://bost.ocks.org/mike/shuffle/
  //see link for explanation of how it works and why it is constructed the way it is
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
    let memoryCards = this.memCardObjects.map((card)=>{
      return (
        <memory-card
          name={card.name}
          isRevealed={card.isRevealed}
          cardImage={card.imageUrl}
          isMatched={card.isMatched}
        ></memory-card>
      )
    })
    return this.shuffle(memoryCards)
  }

  render() {
    return (
      <div class="table">
        <div class="scoreboard">Score: {this.score}</div>
        <div class="memory-board">
          {this.shuffledDeck}
        </div>
      </div>
    );
  }
}
