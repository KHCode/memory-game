import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: true,
})
export class AppRoot {
  render() {
    return (
      <div>
        <header>
          <h1>Memory</h1>
        </header>

        <main>
          <app-home></app-home>
        </main>
      </div>
    );
  }
}
