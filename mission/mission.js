// create variables that contain reusable code
const body = document.body;
const logo = document.querySelector('img');

function setTheme() {
    const themeValue = document.querySelector("select").value;
    console.log("Theme" + themeValue);
    
    if (themeValue === "dark"){
        body.classList.add("dark");
        logo.setAttribute("src", "./byui-logo_white.png");
    }
    else {
        body.classList.remove("dark");
        logo.setAttribute("src", "./byui-logo_blue.webp");
    }
}

// this is fine since it one-time use, but if you were to re-use this element,
// you should assign it to a variable. like this:
// let themeSelector = document.querySelector("select");
document.querySelector("select").addEventListener("change", setTheme);