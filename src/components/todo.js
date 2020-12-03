import { html } from 'lit-html';

// Il punto interrogativo davanti a "?checked" è un helper di litHTML per
// gestire gli attributi booleani
// 
// https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes#Boolean_Attributes
// https://lit-html.polymer-project.org/guide/template-reference#binding-types

const todo = (item) => html`<li id=${item.id}>
  <input type="checkbox" ?checked=${item.completed}>
  ${item.title}</li>`;

export {
  todo
}