import recipes from "./recipes.mjs"

function random(num) {
    return Math.floor(Math.random()*num);
}

function getRandomListEntry(list) {
    return list[random(list.length)];
}

function init() {
    // get a random recipe
    const recipe = getRandomListEntry(recipes);
    renderRecipes([recipe]);
}

function tagsTemplate(tags) {
    var html = ``;
    html += `<div class="tags-container">`;
    tags.forEach((tag) => {
        html += `<h3 class="category">${tag}</h3>`;
    });
    html += `</div>`;
	return html;
}

function ratingTemplate(rating) {
	let html = `
        <span
            class="rating"
            role="img"
            aria-label="Rating: ${rating} out of 5 stars"
        >
    `;
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            html += `
                <span aria-hidden="true" class="icon-star">⭐</span>
            `;
        } else { // else output an empty star
            html += `
                <span aria-hidden="true" class="icon-star-empty">☆</span>
            `;
        }
    }
	html += `</span>`;
	return html;
}
