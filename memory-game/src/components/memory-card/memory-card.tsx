import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'memory-card',
  styleUrl: 'memory-card.scss',
  shadow: true,
})
export class MemoryCard {
  @Prop() isRevealed: boolean = false;
  @Prop() isMatched: boolean = false;
  @Prop() isClicked: boolean = false;
  @Prop() cardImage: string = "/assets/images/butterfly.jpg";
  @Prop() clickHandler;
  @Prop() name: string;
  memoryCardEl: HTMLDivElement;
  imageEl: HTMLImageElement;

  sidePicker = () => {
    if(this.isRevealed){
      let visibility = {'visibility': `${this.isMatched ? 'hidden' : 'visible'}`}
      return ( 
        <div 
          class="revealed image-container" 
          onClick={(e) => {this.clickHandler(e, this)}} 
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
          class="unrevealed" 
          onClick={(e) => {this.clickHandler(e, this)}} 
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
