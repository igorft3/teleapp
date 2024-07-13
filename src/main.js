import { createApp } from "vue";
import { clerkPlugin } from "vue-clerk";
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
import App from "./App.vue";
import "./assets/normalize.css";
import "./style.css";

const app = createApp(App);

app.use(clerkPlugin, {
  publishableKey: PUBLISHABLE_KEY,
});

app.mount("#app");
