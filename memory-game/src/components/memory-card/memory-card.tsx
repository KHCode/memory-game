import { Component, Host, h, Prop, Listen, State } from '@stencil/core';

@Component({
  tag: 'memory-card',
  styleUrl: 'memory-card.scss',
  shadow: true,
})
export class MemoryCard {
  @Prop() isRevealed: boolean = false;
  @Prop() isMatched: boolean = false;
  @State() isClicked: boolean = false;
  @Prop() cardImage: string = "/assets/images/butterfly.jpg";
  // @Prop() clickHandler;
  @Prop() name: string;
  @Listen('click', {passive: false})
  clickHandler(ev, cryForHelp) {
    // ev.preventDefault();
    // ev.stopPropagation()
    // ev.stopImmediatePropagation()
    this.isClicked = true;
    console.dir(ev)
    console.log(cryForHelp)
    // this.revealedCards = this.memoryCards.filter(card => card.isClicked == true)
    // if(this.revealedCards.length < 2){
    //   currentEl.isRevealed = !currentEl.isRevealed;
    //   this.revealedCards.push(currentEl)
    //   console.dir(this.revealedCards)
    // }
    // if(this.revealedCards.length == 2){
    //   if(this.revealedCards[0].name == this.revealedCards[1].name){//check if the cards match
    //     //if so, hide the cards and give the player a point
    //     this.revealedCards[0].style.visibility = 'hidden';
    //     this.revealedCards[1].style.visibility = 'hidden';
    //     this.score++;
    //   }

    // }
  }
  memoryCardEl: HTMLDivElement;
  imageEl: HTMLImageElement;

  componentDidRender(){
    this.memoryCardEl.onclick = (e) => {this.clickHandler(e, "revealed element")}
  }

  sidePicker = () => {
    if(this.isRevealed){
      let visibility = {'visibility': `${this.isMatched ? 'hidden' : 'visible'}`}
      return ( 
        <div 
          class="revealed card image-container" 
          ref={(el) => this.memoryCardEl = el as HTMLDivElement}
          style={visibility}
        >
          <img 
            class="image" 
            src={this.cardImage}
            ref={(el) => this.imageEl = el as HTMLImageElement}
          ></img>
        </div>)
    }else{
      return (
        <div 
          class="unrevealed card" 
          ref={(el) => this.memoryCardEl = el as HTMLDivElement}></div>
      )
    }
  }

  render() {
    return (
      <Host>
        {this.sidePicker()}
      </Host>
    );
  }

}
