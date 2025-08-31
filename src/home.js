import banner from "./assets/Site-background-dark.png"

const createHomepage = () => {
    const main = document.createElement("main");
    const bannerImage = createBannerImage();
    main.append(bannerImage);
    return main;
}

const createBannerImage = () => {
    const image = document.createElement("img");
    image.src = banner;
    image.setAttribute("width", "1280");
    image.setAttribute("height", "292");
    return image;
}

export { createHomepage }