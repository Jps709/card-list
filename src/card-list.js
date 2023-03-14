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
     <character-card name = 'Obi-wan'></character-card>
     <character-card name = "Hello There" top="Hello" bottom="There" description="Hello There"></character-card>
     <character-card top="Passable" bottom="Code"></character-card>
     <character-card top="General" bottom="Kenobi"></character-card>
     
     <player-card></player-card>
     <player-card top="PSU" bottom="All the way"></player-card>
     <player-card sum="Freshman of the year"></player-card>
     <player-card name="Singleton the GOAT"></player-card>
     <player-card name = "PSU" top="PSU" bottom="PSU" sum="PSU"></player-card>
    `;
  }
}

customElements.define('card-list', CardList);