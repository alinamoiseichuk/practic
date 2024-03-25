// Є форма для замовлення продуктів. Вона містить перелік продуктів, кожен з яких
// має власний чекбокс та ціну яка зберігається у властивості value. Користувач може
// вибрати бажані продукти, після натискання кнопки "Додати у кошик" потрібно вивксти суму
// замовлення в спан з ідентифікатором "totalAlmount"

const form = document.querySelector("#orderForm");
const inputs = document.querySelectorAll(".product-checkbox");
const spanEl = document.querySelector("#totalAmount");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const total = [...inputs]
        .filter((elem) => elem.checked)
        .reduce((total, elem) => (total += parseFloat(elem.value)), 0);
    spanEl.textContent = total;
    inputs.forEach((input) => (input.checked = false));
}