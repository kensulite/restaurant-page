import { aboutParagraphs } from "../data";

const createAbout = () => {
    const main = document.createElement("main");
    const paragraphs = createParagraphs();
    for (const paragraph of paragraphs) {
        main.append(paragraph);
    }
    main.classList.add("about");
    return main;
}

const createParagraphs = () => {
    const paragraphs = [];
    for (const content of aboutParagraphs) {
        const p = document.createElement("p");
        p.textContent = content;
        paragraphs.push(p);
    }
    return paragraphs;
}

export { createAbout }