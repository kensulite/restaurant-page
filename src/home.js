import banner from "./assets/Site-background-dark.png"

const createHomepage = () => {
    const main = document.createElement("main");
    main.classList.add("home");
    const bannerImage = createBannerImage();
    const headline = createHeadline();
    main.append(bannerImage, headline);
    return main;
}

const createBannerImage = () => {
    const image = document.createElement("img");
    image.classList.add("banner");
    image.src = banner;
    image.setAttribute("width", "1280");
    image.setAttribute("height", "292");
    return image;
}

const createHeadline = () => {
    const heading = document.createElement("h2");
    const firstPart = document.createTextNode("Where Every Drink Tells a Story");
    const secondPart = document.createTextNode("Welcome to VA-11 HALL-A");
    heading.append(firstPart, document.createElement("br"), secondPart);
    return heading;
}

export { createHomepage }