function adjustMenuVisibility() {
    var screenWidth = window.innerWidth;
    var navItems = document.querySelector('nav ul');

    if (screenWidth < 1000) {
        if (navItems.style.display === 'flex' || navItems.style.display === '') {
            navItems.style.display = 'none';
        }
    } else {
        navItems.style.display = 'flex';
    }
}
document.querySelector("#menu-button").addEventListener("click", show_hide)
window.addEventListener("resize", handleResize);
const gallery = document.querySelectorAll("img");
for (const image of gallery) {
    image.addEventListener("click", viewHandler)
}

function show_hide() {
    const navigation = document.querySelector(".navigation");
    navigation.classList.toggle("hide");
}

function handleResize() {
    const width = window.innerWidth;
    const navigation = document.querySelector(".navigation");
    if (width > 1000) {
        navigation.classList.remove("hide");
    } else {
        navigation.classList.add("hide")
    }
}

function viewerTemplate(pic, alt) {
    return `<div class="viewer">
        <button class="close-viewer">X</button>
        <img src="${pic}" alt="${alt}">
        </div>`;
}

function viewHandler(event) {
    const element = event.target;
    const srcValue = element.getAttribute("src");
    const words = srcValue.split("-");
    const imageFileName = words[0] + "-full.jpeg";
    console.log(imageFileName);
    document.querySelector("body").insertAdjacentHTML("afterbegin", viewerTemplate(imageFileName, "image"));
    document.querySelector(".close-viewer").addEventListener("click", closeViewer);
}

function closeViewer() {
    document.querySelector("body").removeChild(document.querySelector("div"));
}