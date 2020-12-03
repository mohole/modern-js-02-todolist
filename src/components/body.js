import { html } from 'lit-html';
import { search } from './search';
import { list } from './list';

let data = [];
let displayData = [];

const dispatchRender = () => {
  // https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Creating_and_triggering_events
  const ce = new CustomEvent('update-render', {
    bubbles: true
  });
  document.dispatchEvent(ce);
}

if (!data.length) {
  fetch('https://jsonplaceholder.typicode.com/todos')
    .then((response) => response.json())
    .then((json) => {
      console.log(json);

      data = json;
      displayData = json;

      dispatchRender();
    });
}

document.addEventListener('usersearch', (event) => {
  const value = event.detail;

  displayData = data.filter((item) =>
    item.title.search(value) > -1);

  dispatchRender();
});

const body = () => html`
    <section class="app-body">
      ${search()}
      ${list(displayData)}
    </section>
`;

export {
  body
}