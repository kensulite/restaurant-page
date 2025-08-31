import { createHomepage } from "./home";
import "./style.css";

const container = document.querySelector("#content");

container.append(createHomepage());