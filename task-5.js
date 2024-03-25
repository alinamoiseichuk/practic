//Якщо емейл і пароль користувача збігаються, при сабміті зберігай дані з форми
//у локальне сховище і змінюй кнопку login на logout і роби поля введення недоступним для змін.
//При перезавантаженні сторінки, якщо користувач залогінений, ми повинні бачити logout кнопку
//та недоступні для зміни поля з даними користувача
// Клік по кнопці logout повертає все в початковий вигляд і видаляє дані користувача
// з локального сховища
// Якщо введені дані не збігаються з потрібними данними, викликати alert і повідомити про
// помилку

const userData = {
    email: "user@mail.com",
    password: "123"
}

const form = document.querySelector("#login-form");
form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();

    if (JSON.parse(localStorage.getItem("loginData"))) {
        form.elements.button.textContent = "Login";
        form.elements.email.disabled = false;
        form.elements.password.disabled = false;
        localStorage.removeItem("loginData");
        form.reset();
        return
    }

    if (form.elements.email.value !== userData.email || form.elements.password.value !== userData.password) {
        alert("Дані введено не вірно");
        return
    }

    const data = {
        email: form.elements.email.value,
        password: form.elements.password.value
    }

    localStorage.setItem("loginData", JSON.stringify(data));
    form.elements.button.textContent = "Logout";
    form.elements.email.disabled = true;
    form.elements.password.disabled = true;
}

const result = JSON.parse(localStorage.getItem("loginData"));
if (result) {
    form.elements.button.textContent = "Logout";
    form.elements.email.disabled = true;
    form.elements.password.disabled = true;
    form.elements.email.value = result.email;
    form.elements.password.value = result.password;

}
