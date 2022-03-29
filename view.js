const list = document.querySelector(".list");
const grid = document.querySelector(".grid");
const ltg = document.querySelector(".ltg");

list.addEventListener("click", () => {
    ltg.classList.add("list")
})
grid.addEventListener("click", () => {
    ltg.classList.remove("list");
})