import { html } from 'lit-html';
import { todo } from './todo';

const list = (data = []) => html`<ul>
  ${data.map((value) => todo(value))}
</ul>`;

export {
  list
}