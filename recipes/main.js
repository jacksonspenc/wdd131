import recipes from "./recipes.mjs"

function random(num) {
    return Math.floor(Math.random()*num);
}

function getRandomListEntry(list) {
    return list[random(list.length)];
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

function recipeTemplate(recipe) {
	return `
        <div class="recipe">
            <img class="food-img" src="${recipe.image}" alt="image of ${recipe.name}">
            <div class="detail">
                ${tagsTemplate(recipe.tags)}
                <h2 class="dessert-name">${recipe.name}</h2>
                ${ratingTemplate(recipe.rating)}
                <p>${recipe.description}</p>
            </div>
        </div>
    `;
}

function renderRecipes(recipeList) {
    // get the element we will output the recipes into
    const element = document.querySelector(".recipes");
    // reset the recipe list
    element.innerHTML = ``;
    if (recipeList.length == 0) {
        element.innerHTML = `<h2 id="no-result">No Result Found</h2>`;
        return;
    }
    recipeList.forEach(recipe => {
        // use the recipeTemplate function to transform our recipe objects into recipe HTML strings
        const html = recipeTemplate(recipe);
        // Set the HTML strings as the innerHTML of our output element.
        element.innerHTML += html;
    });
}

function init() {
    // get a random recipe
    const recipe = getRandomListEntry(recipes);
    renderRecipes([recipe]);
}

function search(recipe, query) {
    if (recipe.name.toLowerCase().includes(query) ||
        recipe.tags.find((item) => item.toLowerCase().includes(query)) ||
        recipe.description.toLowerCase().includes(query) ||
        recipe.recipeIngredient.find((item) => item.toLowerCase().includes(query))) {
        return true;
    }
    return false;
}
