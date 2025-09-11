import { menu } from "../data";

const createMenu = () => {
    const main = document.createElement("main");
    main.classList.add("menu");
    return main;
}

const createMenuItem = (item) => {

}

const createItemImage = (source, width, height) => {
    const image = document.createElement("img");
    image.src = source;
    image.width = width;
    image.height = height;
    return image;
}

export { createMenu }