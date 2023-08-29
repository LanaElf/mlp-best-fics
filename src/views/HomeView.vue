<template>
  
    <main>
    <libraryPage />
    </main>

</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HelloWorld from '@/components/HelloWorld.vue'; 
import libraryPage from '@/pages/libraryPage.vue'

@Options({
  components: {
    HelloWorld,
    libraryPage
  },
})
export default class HomeView extends Vue {
  data(){
    return{
      ficindex: 0,
    }
  }
}
</script>

<style>
    @font-face{
    font-family: "celestia";
    src: './../fonts/celestiareduxmedium.ttf';
  }

</style>
