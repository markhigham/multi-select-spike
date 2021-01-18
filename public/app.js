const originalSelect = document.querySelector("#multiSelect");
originalSelect.classList.add("original-multi-select");

const options = [];
Array.from(originalSelect.options).forEach((o) => {
  options.push({ text: o.text, value: o.value, selected: o.selected });
});

// console.table(options);
// new structure will be
/*
<new-wrapper>
  <select>
  <button>
  <hr>
  <ol>
    <li>Selected item
  </ol>

*/

const newWrapper = document.createElement("div");
newWrapper.classList.add("new-wrapper");
newWrapper.id = `${originalSelect.id}_wrapper`;

const multiSelect = document.createElement("multiple-select");
multiSelect.setAttribute("v:bind:options","options")
newWrapper.appendChild(multiSelect);

Vue.component("multiple-select", {
  props: ['options'],
  template: `<div>
    <select>
      <option v-for="option in options" v-bind:value="option.value">
        {{ option.text }}
      </option>
    </select>
    <button>Add</button>
  </div>`,
});

originalSelect.parentNode.insertBefore(newWrapper, originalSelect);

var app = new Vue({
  el: newWrapper,
  data: {
    options: options,
  },
});
