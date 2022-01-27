const btns = document.querySelectorAll(".btn");
const snackBars = document.querySelectorAll(".snackBar_outline");
console.log(btns);
btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    console.log("hi");
    if (btn.classList.contains("toggle-btn-1")) displaySnackBar(snackBars[0]);
    else if (btn.classList.contains("toggle-btn-2"))
      displaySnackBar(snackBars[1]);
    else if (btn.classList.contains("toggle-btn-3"))
      displaySnackBar(snackBars[2]);
    else displaySnackBar(snackBars[3]);
  });
});

const displaySnackBar = (snackBar) => {
  snackBar.style.visibility = "visible";
  setTimeout(() => {
    snackBar.style.visibility = "hidden";
  }, 1000);
};
