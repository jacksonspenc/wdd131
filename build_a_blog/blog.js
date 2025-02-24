const articles = [
	{
		id: 1,
		title: 'Septimus Heap Book One: Magyk',
		date: 'July 5, 2022',
		description:
			'If you enjoy stories about seventh sons of seventh sons and magyk this is the book for you.',
		imgSrc: 'Magkycover2.jpg',
		imgAlt: 'Book cover for Septimus Heap 1',
		ages: '10-14',
		genre: 'Fantasy',
		stars: '****'
	},
	{
		id: 2,
		title: 'Magnus Chase Book One: Sword of Summer',
		date: 'December 12, 2021',
		description:
			'The anticipated new novel by Rick Riordan. After Greek mythology (Percy Jackson), Greek/Roman (Heroes of Olympus), and Egyptian (Kane Chronicles), Rick decides to try his hand with Norse Mythology, and the end result is good.',
		imgSrc:
			'xWuyBAAAQBAJ%20(1).jpg',
		imgAlt: 'Book cover for Magnus Chase 1',
		ages: '12-16',
		genre: 'Fantasy',
		stars: '⭐⭐⭐⭐'
	},
	{
		id: 3,
		title: "Belgariad Book One: Pawn of Prophecy",
		date: "Feb 12, 2022",
		description:
		"A fierce dispute among the Gods and the theft of a powerful Orb leaves the World divided into five kingdoms. Young Garion, with his 'Aunt Pol' and an elderly man calling himself Wolf --a father and daughter granted near-immortality by one of the Gods -- set out on a complex mission.",
		imgSrc:
		"https://images-na.ssl-images-amazon.com/images/I/41ZxXA+nInL.jpg",
		imgAlt: "Book cover for Pawn of Prophecy",
		ages: "12-16",
		genre: "Fantasy",
		stars: "⭐⭐⭐⭐⭐"
	}
];

function displayArticles() {
    const container = document.getElementById("articles-container");

    articles.forEach(article => {
        const articleDiv = document.createElement("div");
        articleDiv.classList.add("article");

        const img = document.createElement("img");
        img.src = article.imgSrc;
        img.alt = article.imgAlt;

        const title = document.createElement("h2");
        title.textContent = article.title;

        const date = document.createElement("p");
        date.classList.add("date");
        date.textContent = `Published: ${article.date}`;

        const description = document.createElement("p");
        description.textContent = article.description;

        const details = document.createElement("p");
        details.innerHTML = `<strong>Age Group:</strong> ${article.ages} | <strong>Genre:</strong> ${article.genre}`;

        const stars = document.createElement("p");
        stars.classList.add("stars");
        stars.textContent = `Rating: ${article.stars}`;

        articleDiv.appendChild(img);
        articleDiv.appendChild(title);
        articleDiv.appendChild(date);
        articleDiv.appendChild(description);
        articleDiv.appendChild(details);
        articleDiv.appendChild(stars);
        container.appendChild(articleDiv);
    });
}

document.addEventListener("DOMContentLoaded", displayArticles);