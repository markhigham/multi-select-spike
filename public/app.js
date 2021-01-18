const originalSelect = document.querySelector("#multiSelect");

console.log(originalSelect.options);

const options = [];

Array.from(originalSelect.options).forEach((o) => {
  options.push({ text: o.text, value: o.value, selected: o.selected });
});

console.table(options);

const newWrapper = document.createElement("div");
newWrapper.classList.add("new-wrapper");
newWrapper.id = "rappity_rap_show";

const el = document.createElement("multiple-select");
el.setAttribute("v-bind:option", "options");
newWrapper.appendChild(el);

originalSelect.parentNode.insertBefore(newWrapper, originalSelect);

originalSelect.classList.add("hidden-multi-select");

// Vue.component("multiple-select", {
//   data: function () {

//   },
//   props: ['options'],
//   template:
//     `Hello world`,
// });

// new Vue({
//   el: "#rappity_rap_show",
//   data: {
//     options: options
//   }
// });
