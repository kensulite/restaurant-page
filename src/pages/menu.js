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
    const information = document.createElement("div");
    information.classList.add("information");
    const heading = createItemHeading(item.name);
    const description = createItemDescription(item.description);
    const properties = createItemProperties(item.properties);
    const price = createItemPrice(item.price);
    information.append(heading, description, properties, price);
    container.append(information, image);
    return container;
}

const createItemImage = (image) => {
    const img = document.createElement("img");
    img.src = image.src;
    img.width = image.width;
    img.height = image.height;
    return img;
}


const createItemHeading = (name) => {
    const heading = document.createElement("h2");
    heading.textContent = name;
    return heading;
}

const createItemDescription = (description) => {
    const paragraph = document.createElement("p");
    paragraph.textContent = description;
    return paragraph;
}

const createItemProperties = (properties) => {
    const paragraph = document.createElement("p");
    for (let i = 0; i < properties.length; i++) {
        if (i === properties.length - 1) {
            const andNode = document.createTextNode(" and ");
            paragraph.append(andNode);
        }
        const strongTag = document.createElement("strong");
        strongTag.textContent = properties[i];
        paragraph.append(strongTag);
        if (i === 0) {
            const spaceNode = document.createTextNode(", ");
            paragraph.append(spaceNode);
        }
    }
    return paragraph;
}

const createItemPrice = (price) => {
    const paragraph = document.createElement("p");
    paragraph.classList.add("price");
    paragraph.textContent = `$${price}`;
    return paragraph;
}

export { createMenu }