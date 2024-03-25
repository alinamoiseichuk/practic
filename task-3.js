// Є масив об'єктів з популярними фільмами і форма пошуку за назвою фільму.
// 1. Зроби так, щоб при першому завантаженні строрінки користувач бачив весь перелік
// фільмів(назву, рік виробництва, рейтинг і країну виробник).
// Для рендеру розмітки використовуємо шаблонні рядки та метод insertAdjacentHTML.
// 2. Реалізуй пошук потрібного фільму за назвою. При кліку на кнопку "Пошук" у
// списку залишаються тільки ті фільми, котрі мають повне або часткове співпадіння
// за назвою фільму.

const popularMovies = [
    {
        title: "Avengers: Endgame",
        year: 2019,
        rating: 8.4,
        country: "USA"
    },
    {
        title: "Parasite",
        year: 2019,
        rating: 8.6,
        country: "South Korea"
    },
    {
        title: "Joker",
        year: 2019,
        rating: 8.5,
        country: "USA"
    },
    {
        title: "Spider-Man: Into the Spider-Verse",
        year: 2018,
        rating: 8.4,
        country: "USA"
    },
    {
        title: "The Irishman",
        year: 2019,
        rating: 7.9,
        country: "USA"
    },
    {
        title: "Knives Out",
        year: 2019,
        rating: 7.9,
        country: "USA"
    },
    {
        title: "Black Panther",
        year: 2018,
        rating: 7.3,
        country: "USA"
    },
    {
        title: "Mad Max: Fury Road",
        year: 2015,
        rating: 8.1,
        country: "Australia"
    }
];

const form = document.querySelector("#searchForm");
const list = document.querySelector("#movieList");

const createMarkup = popularMovies.map(({ title, year, rating, country }) =>
    `<li>
    <h2>Назва фільму: ${title}</h2>
    <p>Країна: ${country}</p>
    <p>Рік: ${year}</p>
    <p>Рейтинг: ${rating}</p>
</li>`).join("");

list.insertAdjacentHTML("beforeend", createMarkup);

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const value = form.elements.searchInput.value.toLowerCase();
    const search = popularMovies.filter(element => element.title.toLowerCase().includes(value));
    list.innerHTML = "";
    const result = search.map(({ title, year, rating, country }) =>
        `<li>
        <h2>Назва фільму: ${title}</h2>
        <p>Країна: ${country}</p>
        <p>Рік: ${year}</p>
        <p>Рейтинг: ${rating}</p>
    </li>`).join("");
    list.insertAdjacentHTML("beforeend", result);
}
