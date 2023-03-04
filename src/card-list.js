import { LitElement, html, css } from 'lit';
import "@lrnwebcomponents/meme-maker/meme-maker.js";
import "jps709-character-card/src/character-card.js";
import "jmv-player-card/src/player-card.js";

export class CardList extends LitElement {
  static properties = {
    
  };

  constructor() {
    super();
  }

  render() {
    return html`
     <character-card></character-card>
     <character-card
     name = 'Obi-wan';
     ></character-card>
     <character-card></character-card>
     <character-card></character-card>
     <character-card></character-card>
     <player-card></player-card>
     <player-card></player-card>
     <player-card></player-card>
     <player-card></player-card>
     <player-card></player-card>
    `;
  }
}

customElements.define('card-list', CardList);