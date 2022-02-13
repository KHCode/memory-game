import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'memory-card',
  shadow: true,
})
export class MemoryCard {



  render() {
    return (
      <Host>
        <div class="image-container">
          <img class="image" src=""></img>
        </div>
      </Host>
    );
  }

}
