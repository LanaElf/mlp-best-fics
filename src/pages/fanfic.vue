<template>
	<div id="ficView" class="ficView">
	<div

        class="fanfic"

        :class="{
            fluttershyFanfic: $store.state.themes[0].isActive,
            twilightFanfic: $store.state.themes[1].isActive,
            celestiaFanfic: $store.state.themes[2].isActive,
            lunaFanfic: $store.state.themes[3].isActive,
        }"

    >

	    <div class="title">
            {{ selectedFanfic.name }}
        </div>

        <ul class="genres">
        	<li v-for="genre in selectedFanfic.genres">
                <button @click="filterByGenre(genre)">
        			{{ genre }}
        		</button>
        	</li>
        </ul>

        <ul class="characters">
        	<li v-for="character in selectedFanfic.characters" :key="character.name" >
                <button @click="filterByCharacter(character)">
        			<div class="character-image">
                        <img v-bind:src="character.path">
                    </div>


                    {{ character.name }}

        		</button>
        	</li>
        </ul>

        <div class="wordCount">
            {{ selectedFanfic.wordCount }} слов
        </div>

        <div class="author">
            Автор:
            <a :href="selectedFanfic.authorLink" target="_blank">
                    {{ selectedFanfic.authorName }}
            </a>
        </div>
        <div class="nav">

            <ul id="fanfic-nav">
                <li v-for="chapter in selectedFanfic.chapters" :key="chapter.id">
                    <button @click="fetchFic(chapter)">
                        {{ chapter.name }}
                    </button>
                </li>
            </ul>
        </div>
        <div class="sourceLink">
        		<a :href="selectedFanfic.sourceLink" target="_blank">
        			Открыть в источнике
        		</a>
        </div>
        <div id="chapter" v-if="isChapterSelected" >
       <div id="ficContent" v-if="!this.$store.state.isFicLoading">
            <div class="selectedChapter" id="fanfic">
                <span v-html="selectedChapter.link"></span>
               <span v-html="selectedChapter.content"></span>
            </div>
            <div id="nextChapter" v-if="!isTheEnd">
                <button @click="nextChapter(selectedChapter), fetchNextFic(selectedChapter)">Читать дальше</button>

            </div>
        </div>
		<div class="preloader" v-else>
				<img src="@/arts/derpy_spinning.gif">
				<span>Loading...</span>
		</div>
        </div>
        <div v-if="isTheEnd" class="end">
            Конец
        </div>

	</div>
	<stickyBtn />
	</div>

</template>

<script>
	import selectList from '@/components/UI/selectList'
	import stickyBtn from '@/components/UI/stickyBtn.vue'

export default{
		name: 'ficList',

        components:{
           selectList,
           stickyBtn,
        },

        data() {
            return {

                ficHtml: 'Loading...',
                idByPath: this.$route.params.pathName,
                selectedFic: this.$store.state.libArray,
                sortedFics: this.$store.state.libArray,
                selectedFanfic: this.$store.state.libArray,
                isChapterSelected: false,
                selectedChapter: {},
                isTheEnd: false,

            }
        },

        methods: {
        	filterByGenre(genre) {
        		this.$store.state.filteredByGenre = this.sortedFics.filter(
                    (fic) => { return fic.genres.includes(genre) }
                );

                this.$store.state.selectedGenre = genre;
                this.$store.state.noFilter = false;
                this.$store.state.characterFilter = false;
                this.$store.state.genreFilter = true;
                this.$store.state.bookshelfVisible = true;
                this.$router.push({ path: `/` });
        	},

            filterByCharacter(character) {
               this.$store.state.filteredByCharacter = []

                for (let i = 0; i < this.sortedFics.length; i++) {
                    for (let j = 0; j < this.sortedFics[i].characters.length; j++) {
                        if (character.name == this.sortedFics[i].characters[j].name) {
                            this.$store.state.filteredByCharacter.push(this.sortedFics[i])
                        }
                    }
                }

                this.$store.state.selectedCharacter = character;
                this.$store.state.noFilter = false;
                this.$store.state.genreFilter = false;
                this.$store.state.characterFilter = true;
                this.$store.state.bookshelfVisible = true;
                this.$router.push({ path: `/` });
        	},

        	selectedById() {
        		this.selectedFic = this.$store.state.libArray.filter(f => f.pathName == this.idByPath);
        		this.selectedFanfic = this.selectedFic[0];
        	},

        	async fetchFic(chapter) {
                try{
                    if (this.selectedChapter == chapter){
                        this.isChapterSelected = !this.isChapterSelected;
                    }
                    else {
                        this.isChapterSelected = true;
                    };
                    this.isTheEnd = false;
                  this.$store.state.isFicLoading = true;
                  this.selectedChapter = chapter;

                  const res = await fetch(chapter.path);

                    chapter.content = await res.text();
                    window.location.hash="chapter";



                } catch (e) {
                    console.log(e)
                } finally {
                  this.$store.state.isFicLoading = false;
                }

        	},

            nextChapter(selectedChapter) {

                this.selectedChapter = this.selectedFanfic.chapters.filter(f => f.id == (this.selectedChapter.id + 1))[0];

               if (this.selectedChapter == undefined) {
                    this.selectedChapter = 0;
                    this.isTheEnd = true;

                }

            },

            firstChapter() {
                this.selectedChapter = this.selectedFanfic.chapters.filter(f => f.id == 1)[0];
            },

            async fetchNextFic(chapter) {
                try{
                    this.$store.state.isFicLoading = true;

                    if (this.selectedChapter == 0) {
                      this.$store.state.isFicLoading = false;
                    }

                    const res = await fetch(chapter.path);

                    chapter.content = await res.text();
                    window.location.hash="chapter";
                } catch (e) {
                    console.log(e)
                } finally {
                  this.$store.state.isFicLoading = false;
                }
            },

            async fetchFirstFic() {
                try{
                    this.isChapterSelected = true;

                    this.$store.state.isFicLoading = true;

                    const res = await fetch(this.selectedChapter.path);

                    this.selectedChapter.content = await res.text();
                } catch (e) {
                    console.log(e)
                } finally {
                    this.$store.state.isFicLoading = false;
                }
            },
        },

        mounted() {
        	this.selectedById();
            this.firstChapter();
            this.fetchFirstFic();
        }
	}
</script>

<style lang="scss">
@import "@/variables.scss";
ul{
    list-style-type: none;
    padding: 5px;
}
.ficView{
	width: 80vw;
	margin-top: 5vh;
    margin-bottom: 5vh;
	display: flex;
	place-content: center;
    font-size: 1.1em;
}
.fanfic{
	font-family: "roboto slab";
	background: #fff;
	box-shadow: 0px 0px 20px #ccc;
	display: grid;
	place-content: center;
    width: 80vw;
    padding-bottom: 7vh;
}
.lunaFanfic {
    background: rgb(10,0,40);
}
.title{
	font-size: 25px;
	font-family: "vollcorn";
	font-weight: bold;
	color: $fluttershyThemeColor1;
    padding-top: 2em;
    padding-bottom: 1em;
}
.twilightFanfic .title,
.twilightFanfic #fanfic-nav button:hover,
.twilightFanfic .sourceLink a,
.twilightFanfic .author, .twilightFanfic .author a{
    color: $twilightThemeColor1;
    transition: $baseTransition;
}
.celestiaFanfic .title,
.celestiaFanfic #fanfic-nav button:hover,
.celestiaFanfic .sourceLink a,
.celestiaFanfic .author,
.celestiaFanfic .author a{
    color: $celestiaThemeColor2;
    transition: $baseTransition;
}
.lunaFanfic .title,
.lunaFanfic #fanfic-nav button:hover,
.lunaFanfic .author{
    color: $lunaThemeColor4;
    transition: $baseTransition;
}
.lunaFanfic .author,
.lunaFanfic .wordCount,
.lunaFanfic .sourceLink a,
.lunaFanfic .author a{
    color: $lunaThemeColor5;
}
.lunaFanfic #fanfic-nav a{
    color: white;
}
.wordCount, .chaptersCount {
	font-size: 1em;
	font-weight: bolder;
	padding: 10px 0;
}
#fanfic-nav li{
	padding: 5px 0;
}
#fanfic-nav button{
	border: none;
    background: transparent;
    font-family: "vollcorn";
    font-size: 1em;
	color: black;
}
.lunaFanfic #fanfic-nav button{
    color: white;
}
#fanfic-nav button:hover{
	color: $fluttershyThemeColor1;
    transition: $baseTransition;
}
#ficContent{
    margin: 0 5%;
	text-align: left;
}
.genres{
    padding-bottom: 10px;
    margin: 0 5%;
}
.genres li{
	display: inline-flex;
	color: #5f00aa;
	padding: 5px;
}
.sourceLink{
    padding: 20px;
}
.sourceLink a{
    color: $fluttershyThemeColor1;
    text-decoration: none;
}
.sourceLink a:hover{
    color: $fluttershyThemeColor2;
    transition: $baseTransition;
}
.twilightFanfic .sourceLink a:hover, .twilightFanfic .genres>li>button, .twilightFanfic .author a:hover, .twilightFanfic .wordCount{
    color: $twilightThemeColor2;
    transition: $baseTransition;
}
.celestiaFanfic .sourceLink a:hover, .celestiaFanfic .genres>li>button, .celestiaFanfic .author a:hover, .celestiaFanfic .wordCount{
    color: $celestiaThemeColor4;
    transition: $baseTransition;
}
.lunaFanfic .genres>li>button{
    color: $lunaThemeColor2;
}
.lunaFanfic .sourceLink a:hover, .lunaFanfic .author a:hover{
    color: $lunaThemeColor4;
    transition: $baseTransition;
}
.genres button{
    border: 0px;
    border-radius: 50px;
    font-size: 1em;
    color: $fluttershyThemeColor2;
    background-color: #fffee6;
    padding: 10px 15px;
    border: 1px solid $fluttershyThemeColor1;
    font-family: 'roboto-slab';
}
.twilightFanfic .genres button{
    border: 1px solid $twilightThemeColor1;
}
.celestiaFanfic .genres button{
    border: 1px solid $celestiaThemeColor2;
}
.lunaFanfic .genres button{
    border: 1px solid $lunaThemeColor2;
}
.genres button:hover{
    background-color: #fffdc4;
    transition: $baseTransition;
}
.twilightFanfic .genres button{
    background-color: $twilightThemeColor3;
}
.celestiaFanfic .genres button{
    background-color: $celestiaThemeColor3;
}
.lunaFanfic .genres button{
    background-color: $lunaThemeColor1;
}
.twilightFanfic .genres button:hover{
    background-color: $twilightThemeColor4;
    transition: $baseTransition;
}
.celestiaFanfic .genres button:hover{
    background-color: $celestiaThemeColor1;
    transition: $baseTransition;
}
.lunaFanfic .genres button:hover{
    background-color: $lunaThemeColor4;
    transition: $baseTransition;
}
.characters button{
    border: none;
    background: none;
    font-family: 'vollcorn';
    font-size: 1em;
    padding: 1em 0.5em;
}
.characters button:hover{
    color: $fluttershyThemeColor1;
    transition: $baseTransition;
}
.twilightFanfic .characters button:hover{
    color: $twilightThemeColor1;
}
.celestiaFanfic .characters button:hover{
    color: $celestiaThemeColor2;
}
.lunaFanfic .characters button:hover{
    color: $lunaThemeColor2;
}
.characters{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 0 5%;
}
.lunaFanfic .characters button{
    color: $lunaThemeColor1;
}
.lunaFanfic .characters button:hover{
    color: $lunaThemeColor4;
    transition: $baseTransition;
}
.character-image img{
    filter: drop-shadow(0px 0px 2px #fff);
    height: 5.5em;
}
.author{
    color: $fluttershyThemeColor1;
    padding-bottom: 20px;
}
.author a{
    text-decoration: none;
    font-weight: bolder;
    color: $fluttershyThemeColor1;
}
.author a:hover{
    color: $fluttershyThemeColor2;
}
.preloader{
	display: grid;
	place-content: center;
	grid-row-gap: auto auto;
}
.preloader img{
	height: 200px;
	width: auto;
}
.preloader span{
	font-size: 18px;
	color: $fluttershyThemeColor2;
	margin-bottom: 50px;
	margin-top: 20px;
	font-weight: bold;
}
.twilightFanfic .preloader span{
	color: $twilightThemeColor2;
}
.celestiaFanfic .preloader span{
	color: $celestiaThemeColor2;
}
.lunaFanfic .preloader span{
    color: $lunaThemeColor4;
}
#nextChapter{
    display: grid;
    place-content: center;
}
#nextChapter button{
    color: $fluttershyThemeColor2;
    background-color: $fluttershyThemeColor3;
    border-color: $fluttershyThemeColor1;
    padding: 10px 15px;
    font-size: 1.1em;
    font-family: 'celestia';
    border-radius: 30px;
    border-width: 1px;
    margin: 10px;
}
.twilightFanfic #nextChapter button{
    color: $twilightThemeColor2;
    background-color: $twilightThemeColor3;
    border-color: $twilightThemeColor1;
}
.celestiaFanfic #nextChapter button{
    color: $celestiaThemeColor2;
    background-color: $celestiaThemeColor3;
    border-color: $celestiaThemeColor1;
}
.lunaFanfic #nextChapter button{
    color: $lunaThemeColor2;
    background-color: $lunaThemeColor1;
    border-color: $lunaThemeColor1;
}
#nextChapter button:hover{
    background-color: $fluttershyThemeColor4;
    transition: $baseTransition;
}
.twilightFanfic #nextChapter button:hover{
    background-color: $twilightThemeColor4;
    transition: $baseTransition;
}
.celestiaFanfic #nextChapter button:hover{
    background-color: $celestiaThemeColor5;
    transition: $baseTransition;
}
.lunaFanfic #nextChapter button:hover{
    background-color: $lunaThemeColor4;
    transition: $baseTransition;
}
.end{
    padding: 20px;
    font-weight: bolder;
}
.lunaFanfic .end{
    color: white;
}
.contents{
    list-style-type: none;
    display: grid;
    place-content: center;
    text-align: center;
}
#fanfic>span>h2, #fanfic span h3{
    text-align: center;
    color: $fluttershyThemeColor1;
    padding: 30px 0;
}
.twilightFanfic #fanfic>span>h2, .twilightFanfic #fanfic>span>h3{
    color: $twilightThemeColor1;
}
.celestiaFanfic #fanfic>span>h2, .celestiaFanfic #fanfic>span>h3{
    color: $celestiaThemeColor2;
}
.lunaFanfic #fanfic>span>h2, .lunaFanfic #fanfic>span>h3{
    color: $lunaThemeColor4;
}
.lunaFanfic #fanfic p{
    color: white;
}
.fluttershyFanfic #fanfic a{
    color: $fluttershyThemeColor1;
}
.twilightFanfic #fanfic a{
    color: $twilightThemeColor1;
}
.celestiaFanfic #fanfic a{
    color: $celestiaThemeColor2;
}
.lunaFanfic #fanfic a{
    color: $lunaThemeColor4;
}
.contents a{
    color: black !important;
    line-height: 1.5em;
    text-decoration: none;
}
.lunaFanfic .contents a{
    color: white !important;
}
.fluttershyFanfic .contents a:hover{
    color: $fluttershyThemeColor1 !important;
    transition: $baseTransition;
}
.twilightFanfic .contents a:hover{
    color: $twilightThemeColor1 !important;
    transition: $baseTransition;
}
.celestiaFanfic .contents a:hover{
    color: $celestiaThemeColor2 !important;
    transition: $baseTransition;
}

.lunaFanfic .contents a:hover{
    color: $lunaThemeColor4 !important;
    transition: $baseTransition;
}
.fic-image{
    margin-bottom: 2em;
}
#fanfic p{
    padding-bottom: 10px;
    line-height: 1.5em;
    font-size: 18px;
}
#fanfic p::first-letter{
    padding-left: 40px;
}
#fanfic blockquote{
    font-style: italic;
}
#fanfic br{
    line-height: 5px;
}
#fanfic img{
    max-width: 100%;
    height: auto;
    justify-self: center;
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
    #fanfic p{
        font-size: 1em;
    }
    #ficContent{
        margin: 0;
    }
    .character-image img{
        height: 4em;
    }
    .characters button{
        font-size: 0.8em;
    }
}
</style>