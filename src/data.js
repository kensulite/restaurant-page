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
        price: 250,
        image: {
            src: BadTouch,
            width: 205,
            height: 140
        }
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
        price: 200,
        image: {
            src: BleedingJane,
            width: 205,
            height: 105
        }
    },
    {
        name: "Blue Fairy",
        description: "One of these will make all your teeth turn blue. Hope you brushed them well.",
        properties: ["Sweet", "Girly", "Soft"],
        ingredients: {
            "Adelhyde": 4,
            "Flanergide": 1,
        },
        price: 170,
        image: {
            src: BlueFairy,
            width: 205,
            height: 105
        }
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
        price: 280,
        image: {
            src: CobaltVelvet,
            width: 205,
            height: 105
        }
    },
    {
        name: "Fluffy Dream",
        description: "A couple of these will make your tongue feel velvet-y. More of them and you'll be sleeping soundly.",
        properties: ["Sour", "Girly", "Soft"],
        ingredients: {
            "Adelhyde": 3,
            "Powdered Delta": 3
        },
        price: 170,
        image: {
            src: FluffyDream,
            width: 205,
            height: 105
        }
    }
]

const aboutParagraphs = [
    "Nestled in the rundown heart of Glitch City’s downtown slums, VA-11 HALL-A is more than just a bar — it’s a sanctuary for the broken, the tired, and the forgotten. Operating quietly under a modest neon sign, the bar doesn’t scream for attention. It doesn’t need to. The right people always seem to find their way in.",
    "Here, the drinks are strong, the stories stronger, and the atmosphere soaked in lo-fi synths and cigarette smoke. In a city ruled by oppressive corporations, corrupt law enforcement, and digital surveillance, VA-11 HALL-A offers rare freedom — a space where people can speak freely, cry quietly, and be seen for who they really are.",
    "Run by Jill Stingray, a bartender with a sharp tongue and a soft heart, Valhalla is less about serving alcohol and more about serving connection. Every drink tells a story — not just of its ingredients, but of the person drinking it. Whether it’s a tired hacker, a sentient AI, or a disillusioned cop, everyone brings something to the bar… and leaves a little changed.",
    "No fancy flair. No corporate backing. Just good drinks, better music, and the best kind of company: the kind that doesn't ask questions."
]

export { menu, aboutParagraphs }