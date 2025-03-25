import recipes from "./recipes.mjs"

function random(num) {
    return Math.floor(Math.random()*5);
}

function getRandomListEntry(list) {
    return list[random(list.length)];
}

function init() {
    // get a random recipe
    const recipe = getRandomListEntry(recipes);
    // render the recipe with renderRecipes.
    renderRecipes([recipe]);
}

