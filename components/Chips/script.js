const cancelBtns = document.querySelectorAll(".chip-content");
var chips = document.querySelectorAll(".chip");
const addChip = document.querySelector("#add_chip");
const btn = document.querySelector(".add");
const chipArea = document.querySelector(".chip-area");
// console.log(cancelBtns);
console.log(chips);
let i = chips.length;
const addChipHandler = () => {
  const value = addChip.value;
  console.log(value);
  const chip = document.createElement("div");
  chip.classList.add("chip");
  chip.innerHTML = `<span class="chip-content">${value}</span><span class="chip-actions"> </span>`;
  chipArea.appendChild(chip);
  // chips.appendChild({ chip });
};
chips.forEach((chip) => {
  chip.addEventListener("click", function removeChip() {
    this.remove();
  });
});

btn.addEventListener("click", addChipHandler);
