import { Component, Host, h, Prop, Listen, State } from '@stencil/core';

@Component({
  tag: 'memory-card',
  styleUrl: 'memory-card.scss',
  shadow: true,
})
export class MemoryCard {
  @Prop() isRevealed = false;
  @Prop() cardImage: string = "/assets/images/butterfly.jpg";
  @Prop() clickHandler;
  memoryCardEl: HTMLDivElement;
  imageEl: HTMLImageElement;

  sidePicker = () => {
    if(this.isRevealed){
      return ( 
        <div 
          class="image-container" 
          onClick={(e) => {this.clickHandler(e)}} 
          ref={(el) => this.memoryCardEl = el as HTMLDivElement}
        >
          <img 
            class="image" 
            // onLoad={() => {opacity: 1}}
            src={this.cardImage}
            ref={(el) => this.imageEl = el as HTMLImageElement}
          ></img>
        </div>)
    }else{
      return (
        <div 
          class="unrevealed" 
          onClick={(e) => {this.clickHandler(e)}} 
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
