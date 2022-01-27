const tabs = document.querySelectorAll(".tab-index");
console.log(tabs[0].id);
const tabContents = document.querySelectorAll(".tab-sections");
// console.log(tabContents);

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    console.log("hello");
    console.log(tab);
    const target = document.querySelector(tab.id);
    tabContents.forEach((tabContent) => {
      tabContent.classList.remove("active");
    });
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });
    tab.classList.add("active");
    target.classList.add("active");
  });
});
