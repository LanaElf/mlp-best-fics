<template>

	<div
		id="libraryPage"
		class="libraryPage"
		:class="{
			fluttershyLibraryPage: $store.state.themes[0].isActive,
			twilightLibraryPage: $store.state.themes[1].isActive,
			celestiaLibraryPage: $store.state.themes[2].isActive,
			lunaLibraryPage: $store.state.themes[3].isActive,
		}"
	>

		<div class="bookshelf-container" v-if="$store.state.bookshelfVisible">
			<input class="search"
			v-model.trim="searchQuery"
			placeholder="Поиск..."
		>
		<ul v-if="this.$store.state.noFilter" class="bookshelf">
			<li class="book-like" v-for="fanfic in sortedandSearchedFics" :key="fanfic.id" >

				<ff-button @click="selectById(fanfic)"
					>
					{{ fanfic.name }}
				</ff-button>


				<ul class="genres">
        			<li v-for="genre in fanfic.genres">
                		<button @click="filterByGenre(genre)">
        					{{ genre }}
        				</button>
        			</li>
        		</ul>

				<ul class="characters-nofilter">
        			<li v-for="character in fanfic.characters" :key="character.name">
                		<button @click="filterByCharacter(character)">
        					<div class="character-image-nofilter">
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
			</li>
		</ul>

		<ul class="bookshelf" v-if="this.$store.state.genreFilter">
			<li class="selectedGenre">
				Жанр: {{ this.$store.state.selectedGenre }}
			</li>
			<li>
				<button class="resetFilter"
					@click="resetFilter"
				>
					Сбросить фильтр
				</button>
			</li>
			<li class="book-like" v-for="fanfic in filteredandSearchedFics" :key="fanfic.id" >
				<ff-button
					@click="selectById(fanfic)"

					v-bind:style="fanfic.cover">
					{{ fanfic.name }}
				</ff-button>

				<ul class="genres">
        			<li v-for="genre in fanfic.genres">
                		<button @click="filterByGenre(genre)">
        					{{ genre }}
        				</button>
        			</li>
        		</ul>

				<ul class="characters-nofilter">
        			<li v-for="character in fanfic.characters" :key="character.name">
                		<button @click="filterByCharacter(character)">
        					<div class="character-image-nofilter">
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
			</li>
		</ul>

		<ul class="bookshelf" v-if="this.$store.state.characterFilter">
			<li class="selectedCharacter">
				Персонаж:<br>
				<div class="character-image">
                    <img v-bind:src="this.$store.state.selectedCharacter.path">
                </div>
				{{ this.$store.state.selectedCharacter.name }}
			</li>
			<li>
				<button class="resetFilter"
					@click="resetFilter"
				>
					Сбросить фильтр
				</button>
			</li>
			<li class="book-like" v-for="fanfic in filteredByCharandSearchedFics" :key="fanfic.id" >
				<ff-button
					@click="selectById(fanfic)"

					v-bind:style="fanfic.cover">
					{{ fanfic.name }}
				</ff-button>

				<ul class="genres">
        			<li v-for="genre in fanfic.genres">
                		<button @click="filterByGenre(genre)">
        					{{ genre }}
        				</button>
        			</li>
        		</ul>

				<ul class="characters-nofilter">
        			<li v-for="character in fanfic.characters" :key="character.name">
                		<button @click="filterByCharacter(character)">
        					<div class="character-image-nofilter">
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
			</li>
		</ul>
		</div>

		<stickyBtn />
	</div>

</template>

<script>
	import ffButton from "@/components/UI/ff-button.vue"
	/*import axios from 'axios'*/
	import stickyBtn from '@/components/UI/stickyBtn.vue'
	import fanfic from '@/pages/fanfic.vue'


	export default {
		name: 'libraryPage',
		components:{
			ffButton,
			stickyBtn,
			fanfic

		},

		data() {
			return{

			searchQuery:'',
			isFicSelected: false,
			selectedChapter: '',
            chapterOptions: [
                    {value: 'chapter', name: 'chapter.name'}
                ],
            selectedFic: this.$store.state.libArray,
            sortedFics: this.$store.state.libArray,
            selectedFicName:'',
            selectedFanfic: this.selectedFic,


			}
		},

		computed:{

        	sortedandSearchedFics() {
        		return this.sortedFics.filter(
					fic => fic.name.toLowerCase().includes(this.searchQuery.toLowerCase())
				);
        	},

        	filteredandSearchedFics() {
        		return this.$store.state.filteredByGenre.filter(
					fic => fic.name.toLowerCase().includes(this.searchQuery.toLowerCase())
				);
        	},

			filteredByCharandSearchedFics() {
				return this.$store.state.filteredByCharacter.filter(
					fic => fic.name.toLowerCase().includes(this.searchQuery.toLowerCase())
				);
			},


        },

        methods:{
        	selectById(fanfic) {
        		this.selectedFic = this.$store.state.libArray.filter(f => f.id == fanfic.id);
        		this.selectedFanfic = this.selectedFic[0];
        		this.$router.push({ path: `/fanfic/${fanfic.pathName}/#start` });
        	},

        	filterByGenre(genre) {
        		this.$store.state.filteredByGenre = this.sortedFics.filter((fic) => {
        			return fic.genres.includes(genre);
        		})

        		this.$store.state.selectedGenre = genre;
                this.$store.state.noFilter = false;
				this.$store.state.characterFilter = false;
                this.$store.state.genreFilter = true;
                this.$store.state.bookshelfVisible = true;
        	},

			filterByCharacter(character) {
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
        	},

        	resetFilter() {
        		this.$store.state.noFilter = true;
                this.$store.state.genreFilter = false;
				this.$store.state.characterFilter = false;
        	}
        },
	}

</script>

<style lang="scss" scoped>
 @import "@/variables.scss";

.library-nav{
	background: #ccc;
	height: 100px;
}
ul{
	padding: 10px 0px;
	list-style-type: none;
}
li{
	padding-bottom: 10px;
}
.ficView{
	width: 80vw;
	margin-top: 5vh;
}
.libraryPage{
	display: flex;
	place-content: center;
	max-width: 100vw;
}

input{
		height: 25px;
		font-size: 17px;
		border-radius: 20px;
		padding-left: 10px;
		font-family: "roboto-slab";
		border: 2px solid $fluttershyThemeColor1;
	}
.twilightLibraryPage input{
	border: 2px solid $twilightThemeColor1;
}
.celestiaLibraryPage input{
	border: 2px solid $celestiaThemeColor2;
}
.lunaLibraryPage input{
	border: 2px solid $lunaThemeColor1;
	color: $lunaThemeColor1;
	background: $lunaThemeColor2;
}
.search{
	margin-top: 2em;
	width: 300px;
	justify-self: center;
}
.bookshelf-container{
	position: relative;
	display: grid;
	width: 80vw;
	place-content: center;
}
.bookshelf{
	display: grid;
	flex-wrap: wrap;
	place-content: center;
	padding: 0;
	align-items: center;
	margin: 30px;
	justify-content: stretch;
}
.book-like {
	position: relative;
	align-content: center;
	display: grid;
	padding: 0 5px;
	margin: 10px 0px;
	justify-content: stretch;
}
.book-like button{
	padding: 10px 15px;
	border-radius: 50px;
	background: $fluttershyThemeColor1;
	box-shadow: none;
	font-weight: bold;
	font-size: 1.3em;
	color: white;
	margin: 0 5px;

}
.book-like>button:hover{
	position: relative;
	background: $fluttershyThemeColor2 !important;
	transition: $baseTransition;
}
.twilightLibraryPage li.book-like>button{
	background: $twilightThemeColor1;

}
.twilightLibraryPage li.book-like>button:hover{
	background: $twilightThemeColor2 !important;
	transition: $baseTransition;

}
.celestiaLibraryPage li.book-like>button{
	background: $celestiaThemeColor2;
}
.celestiaLibraryPage li.book-like>button:hover{
	background: $celestiaThemeColor4 !important;
	transition: $baseTransition;
}
.lunaLibraryPage li.book-like>button{
	background: $lunaThemeColor3;
	color: $lunaThemeColor1;
}
.lunaLibraryPage li.book-like>button:hover{
	background: $lunaThemeColor6 !important;
	transition: $baseTransition;
}

.genres{
	display: block;
	place-content: center;
}
.genres li{
	padding-bottom: 5px;
}
.genres button{
	padding: 5px 15px;
	color: $fluttershyThemeColor1;
	text-shadow: none;
	background: white;
	border: 1px solid $fluttershyThemeColor1;
	font-size: 1em;
	font-family: 'roboto slab';
}
.selectedGenre, .selectedCharacter{
	font-weight: bolder;
	color: $fluttershyThemeColor2;
	font-size: 1em;
}
.twilightLibraryPage .selectedGenre, .twilightLibraryPage .selectedCharacter{
	color: $twilightThemeColor2;
}
.celestiaLibraryPage .selectedGenre, .celestiaLibraryPage .selectedCharacter{
	color: $celestiaThemeColor4;
}
.lunaLibraryPage .selectedGenre, .lunaLibraryPage .selectedCharacter{
	color: $lunaThemeColor1;
	text-shadow: 0px 0px 3px $lunaThemeColor2;
}
.twilightLibraryPage ul.genres>li>button{
	border: 1px solid $twilightThemeColor1;
	color: $twilightThemeColor1;
}
.celestiaLibraryPage ul.genres>li>button{
	border: 1px solid $celestiaThemeColor2;
	color: $celestiaThemeColor2;
}
.lunaLibraryPage ul.genres>li>button{
	background: $lunaThemeColor2;
	border: 1px solid $lunaThemeColor5;
	color: $lunaThemeColor5;
}
.genres button:hover{
	background: $fluttershyThemeColor3;
	transition: $baseTransition;
}
.characters button{
	background: none;
}
.characters-nofilter{
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
}
.characters-nofilter li{
	padding: 0;
}
.characters-nofilter button{
	background: none;
	border: none;
	padding: 0.2em;
}
.character-image{
	padding-top: 1em;
}
.character-image-nofilter{
	padding-top: 0;
}
.character-image img{
	height: 7em;
	filter: drop-shadow(0px 0px 1px #fff);
}
.character-image-nofilter img{
	height: 2.5em;
	filter: drop-shadow(0px 0px 1px #fff);
}
.selectedCharacter{
	padding-bottom: 1em;
}
.twilightLibraryPage .genres button:hover{
	background: $twilightThemeColor3;
	transition: $baseTransition;
}
.celestiaLibraryPage .genres button:hover{
	background: $celestiaThemeColor1;
	transition: $baseTransition;
}
.lunaLibraryPage .genres button:hover{
	background: $lunaThemeColor3;
	transition: $baseTransition;
}
.wordCount{
	font-weight: bolder;
	color: $fluttershyThemeColor2;
}
.author{
	color: $fluttershyThemeColor2;
}
.author a{
    text-decoration: none;
    font-weight: bold;
    color: $fluttershyThemeColor2;
}
.author a:hover{
    color: $fluttershyThemeColor1;
	transition: $baseTransition;
}
.twilightLibraryPage .author a:hover{
    color: $twilightThemeColor1;
	transition: $baseTransition;
}
.celestiaLibraryPage .author a:hover{
    color: $celestiaThemeColor2;
	transition: $baseTransition;
}
.lunaLibraryPage .author a:hover{
    color: $lunaThemeColor1;
	transition: $baseTransition;
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
.twilightLibraryPage .wordCount,
.twilightLibraryPage .author,
.twilightLibraryPage .author a,
.twilightLibraryPage .preloader span{
	color: $twilightThemeColor2;
}
.celestiaLibraryPage .wordCount,
.celestiaLibraryPage .author,
.celestiaLibraryPage .author a,
.celestiaLibraryPage .preloader span{
	color: $celestiaThemeColor4;
}
.lunaLibraryPage .wordCount,
.lunaLibraryPage .author,
.lunaLibraryPage .author a,
.lunaLibraryPage .preloader span{
	color: $lunaThemeColor4;
}
.resetFilter{
	border: 1px solid $fluttershyThemeColor1;
	color: $fluttershyThemeColor1;
	background-color: $fluttershyThemeColor3;
	border-radius: 20px;
	font-size: 0.9em;
	padding: 5px 10px;
	font-family: 'celestia';
}
.resetFilter:hover{
	background-color: $fluttershyThemeColor4;
	transition: $baseTransition;
}
.twilightLibraryPage .resetFilter{
	border: 1px solid $twilightThemeColor1;
	color: $twilightThemeColor1;
	background-color: $twilightThemeColor3;
}
.twilightLibraryPage .resetFilter:hover{
	background-color: $twilightThemeColor4;
	transition: $baseTransition;
}
.celestiaLibraryPage .resetFilter{
	border: 1px solid $celestiaThemeColor2;
	color: $celestiaThemeColor2;
	background-color: $celestiaThemeColor3;
}
.celestiaLibraryPage .resetFilter:hover{
	background-color: $celestiaThemeColor5;
	transition: $baseTransition;
}
.lunaLibraryPage .resetFilter{
	border: 1px solid $lunaThemeColor1;
	color: $lunaThemeColor1;
	background-color: $lunaThemeColor2;
}
.lunaLibraryPage .resetFilter:hover{
	background-color: $lunaThemeColor3;
	transition: $baseTransition;
}
</style>