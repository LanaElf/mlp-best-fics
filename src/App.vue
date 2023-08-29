<template>
  <header-view />
  <main class="main" 
      :class="{
      fluttershyMain: $store.state.themes[0].isActive,
      twilightMain: $store.state.themes[1].isActive,
      celestiaMain: $store.state.themes[2].isActive,
      lunaMain: $store.state.themes[3].isActive,
    }">
    <router-view />

  </main>
  <footer-view />
</template>

<script>
import HeaderView from '@/components/header.vue'
import FooterView from '@/components/footer.vue'
import fanfic from '@/pages/fanfic.vue'


export default{
  name: 'App',
  components: {
    HeaderView,
    FooterView,
    fanfic,

  },
  data(){
    return{
      selectedTheme2: null,

    }
  },
  methods:{
    
    sortFics(){
      this.sortedFics = this.$store.state.libArray.sort((a, b) => a.name.localeCompare(b.name));
            
    },
    saveThemesState(){
        const parsedThemes = JSON.stringify(this.$store.state.themes);
        localStorage.setItem('stateOfThemes', parsedThemes);
        
      },

  },
  mounted(){
            
      this.sortFics();
    
      if(localStorage.getItem('stateOfThemes')){
        this.stateOfThemes = localStorage.stateOfThemes;
      };

  },
  watch:{
    /*themesState(newThemesState) {
      localStorage.themesState = newThemesState;
    }*/
  },
  beforeCreate() {
    /*this.$store.commit('initialiseStore');*/
  }
}
</script>

<style lang="scss">
@import "@/variables.scss";


@font-face{
    font-family: "celestia";
    src: './../fonts/celestiareduxmedium.ttf';
  }
  @font-face{
    font-family: "vollcorn";
    src: './../fonts/Vollkorn-Medium.ttf';
  }
  *{
  margin: 0;
}

#app {
  font-family: "vollcorn";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow-x: hidden;
}

html {
  scroll-behavior: smooth;
}
header, footer{
    background: radial-gradient(circle, #c1ffe1, $fluttershyThemeColor2); 
}
.twilightHeader, .twilightFooter{
  background: radial-gradient(circle, $twilightThemeColor3, $twilightThemeColor2);
}
.celestiaHeader, .celestiaFooter{
  background: radial-gradient(circle, $celestiaThemeColor3 50%, $celestiaThemeColor2 100%);
}
.lunaHeader, .lunaFooter{
  background: radial-gradient(circle, $lunaThemeColor1 0%, $lunaThemeColor2 100%);
}
.main {
  display: grid;
  place-content: center;
  background-size: 500px;
  padding-bottom: 14px;
  z-index: 2;
  position: relative;
  background-attachment: fixed;

}
.fluttershyMain{
  background-image: linear-gradient(to top, rgba(255,255,255,0.7), rgba(255,255,255,0.7)), url('@/arts/fluttershy-background1.png');
}
.twilightMain{
  background-image: linear-gradient(to top, rgba(240, 235, 255,0.7), rgba(240, 235, 255,0.7)), url('@/arts/twilight_background.png');
  background-size: 300px;
}
.celestiaMain{
  background-image: linear-gradient(to top, rgba(255, 255, 255,0.7), rgba(255, 255, 255,0.7)), url('@/arts/celestia_background.png');
  background-size: 200px;
}
.lunaMain{
  background-image: linear-gradient(to top, rgba(10, 0, 30,0.8), rgba(10, 0, 30,0.8)), url('@/arts/luna_background.png');
  background-size: 300px;
}



@media (max-device-width: 800px) and (-webkit-min-device-pixel-ratio: 2.5),
    (max-device-width: 800px) and (min--moz-device-pixel-ratio: 2.5),
    (max-device-width: 800px) and (-o-min-device-pixel-ratio: 2.5),
    (max-device-width: 800px) and (-ms-min-device-pixel-ratio: 2.5),
    (max-device-width: 800px) and (min-device-pixel-ratio: 2.5),
    (max-device-width: 600px) and (-webkit-min-device-pixel-ratio: 2),
    (max-device-width: 600px) and (min--moz-device-pixel-ratio: 2),
    (max-device-width: 600px) and (-o-min-device-pixel-ratio: 2),
    (max-device-width: 600px) and (-ms-min-device-pixel-ratio: 2),
    (max-device-width: 600px) and (min-device-pixel-ratio: 2){
  .header{
    height: auto;

  }
  .lunaHeader{
    height: 480px;
  }
  .title-image{
    height: 80px;
  }

  .fluttershyHeader .title{
    padding-bottom: 20px;
  }
  .header-image{
    max-width: 80%;
  }
.twilightHeader div.header-image{
  height: 250px;
}
.lunaHeader div.header-image{
  max-width: 100vw;
}
  .bookshelf-container{
    width: 100% !important;
    justify-items: center;
  }
  .search{
    width: 80%;
    height: 2em;
  }
  .bookshelf{
    max-width: 100vw !important;
    margin: 10px !important;
    justify-content: center;
  }
  .bookshelf li{
    max-width: 100vw !important;
    justify-items: center;
  }
  .genres {
    flex-wrap: wrap;
  }
  .genres li{
    padding: 2px;
  }
  .genres button{
    font-size: 14px !important;
    margin: 3px !important;
  }
  .book-like{
    padding: 0;
    margin: 10px;
  }
  .fluttershyLibraryPage .book-like{
    border-bottom: 3px dotted $fluttershyThemeColor1;
  }
  .twilightLibraryPage .book-like{
    border-bottom: 3px dotted $twilightThemeColor2;
  }
  .celestiaLibraryPage .book-like{
    border-bottom: 3px dotted $celestiaThemeColor2;
  }
  .lunaLibraryPage .book-like{
    border-bottom: 3px dotted $lunaThemeColor4;
  }
  .book-like>button{
    width: 100%;
  }
  .libraryPage{
    width: 100vw;
    display: grid;
    justify-items: center;
  }
  .author{
    color: $fluttershyThemeColor1;
    padding-bottom: 10px;
  }
  .lunaFanfic .author, .lunaFanfic .wordCount, .lunaFanfic .sourceLink a{
    color: $lunaThemeColor5;
  }
  .title{
    font-size: 1.3em !important;
    width: 95vw;
  }
  #fanfic > li > span > h2{
    font-size: 1.2em;
  }
  #fanfic p{
    font-size: 1em;
  }
  .fanfic{
    justify-items: center;
    width: 100vw;
    box-shadow: none !important;
  }
  .ficView{
    width: 100% !important;
    margin: 0 !important;

  }
  #ficContent{
    width: 90vw;
  }
  footer{
    height: auto;
    padding: 30px 20px;
  }
}
</style>
