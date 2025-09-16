import { aboutParagraphs } from "../data";
import Banner from "../assets/VA-11_HALL-A.png"

const createAbout = () => {
    const main = document.createElement("main");
    const paragraphs = createParagraphs();
    for (const paragraph of paragraphs) {
        main.append(paragraph);
    }
    const banner = createBanner();
    main.append(banner);
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

const createBanner = () => {
    const img = document.createElement("img");
    img.src = Banner;
    img.setAttribute("width", 1236);
    img.setAttribute("height", 553);
    return img;
}

export { createAbout }