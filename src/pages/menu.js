import { menu } from "../data";

const createMenu = () => {
    const main = document.createElement("main");
    main.classList.add("menu");
    for (const item of menu) {
        main.append(createMenuItem(item));
    }
    return main;
}

const createMenuItem = (item) => {
    const container = document.createElement("article");
    const image = createItemImage(item.image);
    container.append(image);
    return container;
}

const createItemImage = (image) => {
    const img = document.createElement("img");
    img.src = image.src;
    img.width = image.width;
    img.height = image.height;
    return img;
}

export { createMenu }