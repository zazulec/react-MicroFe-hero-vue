<script>
import { createApp } from 'vue'
import Hero from "./Hero.vue";
export default {
  setup(htmlRefElement){
    createApp(Hero).mount(htmlRefElement)
  }
}
</script>
