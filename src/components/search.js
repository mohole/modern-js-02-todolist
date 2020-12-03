import { html } from 'lit-html';

const doSearch = (event) => {
  const str = event.target.value.toLowerCase();

  // Definiamo un custom event che supporti il bubbling e che
  // abbia come "allegato" dei dati custom
  // https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Creating_and_triggering_events
  const ce = new CustomEvent('usersearch', {
    bubbles: true,
    detail: str
  });
  document.dispatchEvent(ce);
}

// Per aggiungere un event listener in un template litHTML si usa la @
// https://lit-html.polymer-project.org/guide/template-reference#binding-types

const search = (userValue = '') => html`
    <form>
      <label for="search">Search: </label>
      <input type="text" name="search" value=${userValue} @keyup=${doSearch}>
    </form>
`;

export {
  search
}