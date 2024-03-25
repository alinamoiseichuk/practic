// Наведено список людей. Зроби можливість сортування за ім'ям та прізвищем
const list = document.querySelector(".people");
const listItems = document.querySelectorAll(".person");
const sortByNameButton = document.querySelector("#sortByNameButton");
const sortByLastNameButton = document.querySelector("#sortByLastNameButton");

sortByNameButton.addEventListener("click", sortedByName);
sortByLastNameButton.addEventListener("click", sortByLastName);

function sortedByName(event) {
    const sortByName = [...listItems]
        .toSorted((a, b) => a.textContent.localeCompare(b.textContent));
    list.innerHTML = "";
    list.append(...sortByName);
}

function sortByLastName(event) {
    const sortByLastName = [...listItems]
        .toSorted((a, b) => {
            const firstValue = a.textContent.split(" ")[1];
            const secondValue = b.textContent.split(" ")[1];
            return firstValue.localeCompare(secondValue);
        });
    list.innerHTML = "";
    list.append(...sortByLastName);
}