import BadTouch from "./assets/badtouch.png";
import BleedingJane from "./assets/bleedingjane.png";
import BlueFairy from "./assets/bluefairy.png";
import CobaltVelvet from "./assets/cobaltvelvet.png";
import FluffyDream from "./assets/fluffydream.png";

const menu = [
    {
        name: "Bad Touch",
        description: "We're nothing but mammals after all.",
        properties: ["Sour", "Classy", "Vintage"],
        ingredients: {
            "Bronson Extract": 2,
            "Powdered Delta": 2,
            "Flanergide": 2,
            "Karmotrine": 4
        },
        image: BadTouch
    },
    {
        name: "Bleeding Jane",
        description: "Say the name of this drink three times in front of a mirror and you'll look like a fool.",
        properties: ["Spicy", "Classic", "Sobering"],
        ingredients: {
            "Bronson Extract": 1,
            "Powdered Delta": 3,
            "Flanergide": 3
        },
        image: BleedingJane
    },
    {
        name: "Blue Fairy",
        description: "One of these will make all your teeth turn blue. Hope you brushed them well.",
        properties: ["Sweet", "Girly", "Soft"],
        ingredients: {
            "Adelhyde": 4,
            "Flanergide": 1,
        },
        image: BlueFairy
    },
    {
        name: "Cobalt Velvet",
        description: "It's like champaigne *sic* served on* sic* a cup that had a bit of cola left.",
        properties: ["Bubbly", "Classy", "Burning"],
        ingredients: {
            "Adelhyde": 2,
            "Flanergide": 3,
            "Karmotrine": 5
        },
        image: CobaltVelvet
    },
    {
        name: "Fluffy Dream",
        description: "A couple of these will make your tongue feel velvet-y. More of them and you'll be sleeping soundly.",
        properties: ["Sour", "Girly", "Soft"],
        ingredients: {
            "Adelhyde": 3,
            "Powdered Delta": 3
        },
        image: FluffyDream
    }
]

export { menu }