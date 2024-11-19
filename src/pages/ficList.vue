<template>
	<div
        class="fanfic"
        v-for="fanfic in selectedFic"
        :fanfic="fanfic"
        :key="fanfic.id"
        @select="$emit('select', fanfic)"
        :class="{
            fluttershyFanfic: $store.state.themes[0].isActive,
            twilightFanfic: $store.state.themes[1].isActive,
            celestiaFanfic: $store.state.themes[2].isActive,
            lunaFanfic: $store.state.themes[3].isActive,
        }"
    >

	    <div class="title">
            {{ fanfic.name }}
        </div>

        <ul class="genres">
        	<li v-for="genre in fanfic.genres">
                <button class="genre-button" @click="filterByGenre(genre)">
        			{{ genre }}
        		</button>
        	</li>
        </ul>

        <ul class="characters">
        	<li v-for="character in selectedFanfic.characters" :key="character.name">
                <button @click="filterByCharacter(character)">
        			<div class="character-image">
                        <img v-bind:src="character.path">
                    </div>
        		</button>
        	</li>
        </ul>

        <div class="wordCount">
            {{ fanfic.wordCount }} слов
        </div>

        <div class="author">
            Автор:
            <a :href="fanfic.authorLink" target="_blank">
                    {{ fanfic.authorName }}
            </a>
        </div>
        <div class="nav">

            <ul id="fanfic-nav">
                <li v-for="chapter in fanfic.chapters" :key="chapter.id">
                    <a :href="chapter.anchor">{{ chapter.name }}</a>
                </li>
            </ul>
        </div>
        <div class="sourceLink">
        		<a :href="fanfic.sourceLink" target="_blank">
        			Открыть на ponyfiction.org
        		</a>
        </div>
        <div id="ficContent">
            <ul id="fanfic">
                <li v-for="chapter in fanfic.chapters" :key="chapter.id">
                    <span v-html="chapter.link"></span>
                    <span v-html="chapter.content"></span>
                </li>
            </ul>
        </div>

	</div>
</template>

<script>
import selectList from '@/components/UI/selectList'

export default{
		name: 'ficList',

        components:{
           selectList
        },

        props:{
        	ficindex: Number,
        	selectedFic: Array,
        	sortedFics: Array,

        },

        data() {
            return {

                ficHtml: 'Loading...',

            }
        },

        methods: {
        	filterByGenre(genre){
        		this.$store.state.filteredByGenre = this.sortedFics.filter(
                    (fic) => { fic.genres.includes(genre) });

                this.$store.state.noFilter = false;
                this.$store.state.genreFilter = true;
                this.$store.state.characterFilter = false;
                this.$store.state.bookshelfVisible = true;

        	},

            filterByCharacter(character){
               this.$store.state.filteredByCharacter = []

                for (let i = 0; i < this.sortedFics.length; i++){
                    for (let j = 0; j < this.sortedFics[i].characters.length; j++){
                        if (character.name == this.sortedFics[i].characters[j].name){
                            this.$store.state.filteredByCharacter.push(this.sortedFics[i])
                        }
                    }
                }

                this.$store.state.selectedCharacter = character;
                this.$store.state.noFilter = false;
                this.$store.state.genreFilter = false;
                this.$store.state.characterFilter = true;
                this.$store.state.bookshelfVisible = true;
        	}
        },
	}
</script>

<style lang="scss" scoped>
@import "@/variables.scss";

@font-face{
    font-family: "celestia";
    src: './../fonts/celestiareduxmedium.ttf';
}

ul{
    list-style-type: none;
    padding: 5px;
}
.fanfic{
	font-family: "celestia";
	background: #fff;
	box-shadow: 0px 0px 20px #ccc;
	display: grid;
	place-content: center;
}
.title{
	font-size: 25px;
	font-family: "celestia";
	font-weight: bold;
	color: $fluttershyThemeColor1;
	}
.twilightFanfic .title, .twilightFanfic #fanfic-nav a:hover, .twilightFanfic .sourceLink a, .twilightFanfic .author, .twilightFanfic .author a{
    color: $twilightThemeColor1;
    transition: $baseTransition;
}
.celestiaFanfic .title, .celestiaFanfic #fanfic-nav a:hover, .celestiaFanfic .sourceLink a, .celestiaFanfic .author, .celestiaFanfic .author a{
    color: $celestiaThemeColor2;
    transition: $baseTransition;
}
.wordCount, .chaptersCount {
	font-size: 17px;
	font-weight: bolder;
	padding: 10px 0;
}
#fanfic-nav li{
	padding: 5px 0;
}
#fanfic-nav a{
	text-decoration: none;
	padding: 5px 20px;
	color: black;
}
#fanfic-nav a:hover{
	color: $fluttershyThemeColor1;
    transition: $baseTransition;
}
#ficContent{
	margin: 0 5%;
	text-align: left;
}
.genres{
    padding-bottom: 10px;
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
.genres button{
    border: 0px;
    border-radius: 50px;
    font-size: 16px;
    color: $fluttershyThemeColor2;
    background-color: #fffee6;
    padding: 10px 15px;
    border: 1px solid $fluttershyThemeColor1;
    font-family: 'roboto slab';
}
.genre-button{
    font-family: 'roboto slab';
}
.twilightFanfic .genres button{
    border: 1px solid $twilightThemeColor1;
}
.celestiaFanfic .genres button{
    border: 1px solid $celestiaThemeColor2;
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
.twilightFanfic .genres button:hover{
    background-color: $twilightThemeColor4;
    transition: $baseTransition;
}
.celestiaFanfic .genres button:hover{
    background-color: $celestiaThemeColor1;
    transition: $baseTransition;
}
.author{
    color: $fluttershyThemeColor1;
    padding: 15px;
}
.author a{
    text-decoration: none;
    font-weight: bolder;
    color: $fluttershyThemeColor1;
}
.author a:hover{
    color: $fluttershyThemeColor2;
    transition: $baseTransition;
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
    .genres {
        width: 100vw;
    }
    #fanfic p{
        font-size: 1em;
    }
}
</style>