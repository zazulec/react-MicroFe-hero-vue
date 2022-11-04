import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'
import Hero from "./components/Hero.vue";
import HeroWrapper from "./components/HeroWrapper.vue";

const app = createApp(App)
app.component('Hero', Hero).component('HeroWrapper',HeroWrapper)
app.mount('#app')



