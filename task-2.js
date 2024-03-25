// Наведено список людей. Зроби можливість фільтрації (пошуку) за ім'ям або прізвищем
const list = document.querySelector(".contacts");
const items = [...list.children];
const input = document.querySelector(".contactsFilter");

input.addEventListener("input", onInput);

function onInput(event) {
    const value = event.target.value.toLowerCase();
    const filterItem = items.filter(item => item.textContent.toLowerCase().includes(value));
    list.innerHTML = "";
    list.append(...filterItem);
}