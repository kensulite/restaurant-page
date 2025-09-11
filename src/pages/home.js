import banner from "../assets/Site-background-dark.png"

const createHomepage = () => {
    const main = document.createElement("main");
    main.classList.add("home");
    const bannerImage = createBannerImage();
    const headline = createHeadline();
    const introduction = createIntroduction();
    main.append(bannerImage, headline, introduction);
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
    const firstPart = document.createTextNode("Where Every Drink Tells a Story,");
    const secondPart = document.createTextNode("Welcome to VA-11 HALL-A");
    heading.append(firstPart, document.createElement("br"), secondPart);
    return heading;
}

const createIntroduction = () => {
    const paragraph = document.createElement("p");
    paragraph.textContent = "Behind flickering neon signs and the hum of rain-soaked streets, there’s a place where the city slows down — even if just for a drink. VA-11 HALL-A, known to regulars as Valhalla, isn’t just a bar. It’s a refuge for drifters, dreamers, hackers, and lost souls chasing a moment of peace in a world that forgot how to breathe. Step inside, and the glow of holoscreens, the rhythm of synth beats, and the stories poured into every glass remind you: in this city of steel and static, humanity still lingers at the bottom of a well-mixed cocktail.";
    return paragraph;
}

export { createHomepage }