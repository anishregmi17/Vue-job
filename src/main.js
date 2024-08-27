import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faLinkedin,
  faGithub,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
library.add(faLinkedin, faGithub, faTwitter, faInstagram);

createApp(App).mount("#app").component("font-awesome-icon", FontAwesomeIcon);
