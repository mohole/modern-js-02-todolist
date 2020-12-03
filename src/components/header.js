import { html } from 'lit-html';

// Component STATELESS
const header = (title = 'App title') => html`
    <header>
      <h1>${title}</h1>
    </header>
`;

export {
  header
}