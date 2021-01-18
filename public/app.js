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
multiSelect.setAttribute("v:bind:options", "existingOptions");
newWrapper.appendChild(multiSelect);

originalSelect.parentNode.insertBefore(newWrapper, originalSelect);

var app = Vue.createApp({
  data: {
    existingOptions: options,
  },
});



app.component("multiple-select", {
  props: ["existingOptions"],
  template: `<div>
    <select>
      <option v-for="option in existingOptions" v-bind:value="option.value">
        {{ option.text }}
      </option>
    </select>
    <button>Add</button>
  </div>`,
});

app.mount(newWrapper);
