import { createHomepage } from "./pages/home";
import { createAbout } from "./pages/about";
import { createMenu } from "./pages/menu";
import "./style.css";

const paths = {
    "Home": createHomepage,
    "About": createAbout,
    "Menu": createMenu
}

const container = document.querySelector("#content");

const addNavigationEvents = () => {
    const navigationButtons = document.querySelectorAll("nav button");
    for (const button of navigationButtons) {
        button.addEventListener("click", handleNavigationClick);
    }
}

const handleNavigationClick = (e) => {
    const path = e.target.textContent;
    changePath(path);
}

const changePath = (newPath) => {
    container.replaceChildren();
    container.append(paths[newPath]());
}

changePath("About");
addNavigationEvents();