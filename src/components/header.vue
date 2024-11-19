 <template>
	<header
		class="header"
		:class="{
			fluttershyHeader: this.$store.state.themes[0].isActive,
			twilightHeader: this.$store.state.themes[1].isActive,
			celestiaHeader: this.$store.state.themes[2].isActive,
			lunaHeader: this.$store.state.themes[3].isActive,
		}"
	>
		<div class="themeSwitch, component-container" @click="showOptions = !showOptions">
			<div class="component__select" >
    		<div id="text" class="component__select--name">Тема</div>
				<ul class="component__select-options" v-if="showOptions">
					<li class="select--option" v-for="theme in this.$store.state.themes" :style="theme.buttonStyle" >
    				<label>
    					<input
							:value="theme.value"
							:key="theme.id"
							@click="themeActivate(theme)"
							class="theme-btn"
							type="radio"
							name="list"
							id="theme.id"
							/>
    						{{ theme.name }}
    				</label>
    			</li>
				</ul>
			</div>
		</div>
		<div class="title">
			<!--<div class="title-image"></div>-->
			<div class="title-mlp">MLP</div>
			<div class="title-sub">лучшие фанфики</div>
		</div>
		<div class="header-image"></div>

	</header>
	<div id="library-link" class="library_link" :class="{
			fluttershy_library_link: $store.state.themes[0].isActive,
			twilight_library_link: $store.state.themes[1].isActive,
			celestia_library_link: $store.state.themes[2].isActive,
			luna_library_link: $store.state.themes[3].isActive,
		}">
			<h2><a href="/">Библиотека</a></h2>
	</div>
</template>

<script>


	export default {
		name: 'HeaderView',

		data() {
			return{
				selectedTheme3: {},
				showOptions: false,
			}
		},

		methods: {

			themeActivate(theme){
				theme.isActive = true;
				this.$store.state.themes.forEach(function(item, i, arr) {
					if (item.id !== theme.id){
						item.isActive = false;
					}
				});
				this.saveThemesState();

			},
			saveThemesState(){
      			const parsedThemes = JSON.stringify(this.$store.state.themes);
      			localStorage.setItem('stateOfThemes', parsedThemes);
    		},
		},

		mounted() {
			 if(localStorage.getItem('stateOfThemes')){
        		this.$store.state.themes = JSON.parse(localStorage.stateOfThemes);
     		 };
		},
    }
</script>

<style lang="scss">
@import "@/variables.scss";


	.header{
		height: 550px;
		display: grid;
		justify-items: center;
	}

	.title{
		padding-top: 30px;
		padding-bottom: 10px;
		font-family: 'celestia';
		color: white;

	}
	.title-mlp{
		font-size: 7em;
		line-height: 0.8em;
		color: #fff;
		text-decoration: none;
		background: linear-gradient(150deg, #f85679, #f76f7f, #fffd75, #75ffdd, #75e1ff, #757cff, #c174fc, #fa74fc);
  		background-size: 600% 200%;
  		-webkit-background-clip: text;
  		-webkit-text-fill-color: transparent;
  		-webkit-animation: rainbow 10s ease infinite;
  		animation: rainbow 10s ease infinite;
		  font-family: 'celestia';


	}
	.title-sub{
		font-size: 2em;
		color: #fff;
		text-decoration: none;
		background: linear-gradient(150deg, #f85679, #f76f7f, #fffd75, #75ffdd, #75e1ff, #757cff, #c174fc, #fa74fc);
  		background-size: 600% 200%;
  		-webkit-background-clip: text;
  		-webkit-text-fill-color: transparent;
  		-webkit-animation: rainbow 10s ease infinite;
  		animation: rainbow 10s ease infinite;
		font-family: 'celestia';

	}
	.title-image{
		width: 1000px;
		height: 170px;
		max-width: 100%;
		background-size: contain;
	background-position: center;
  background-repeat: no-repeat;
	}
	.fluttershyHeader .title-image{
		background-image: url('@/arts/snowpityTime3.png');
	}
	.twilightHeader .title-image{
		background-image: url('@/arts/Snowpity_Time_Twilight.png');
	}
	.celestiaHeader .title-image{
		background-image: url('@/arts/Snowpity_Time_Celestia.png');
	}
	.lunaHeader .title-image{
		background-image: url('@/arts/Snowpity_Time_Luna.png');
	}



	.library_link{
		z-index: 2;
		position: relative;
		font-family: 'roboto slab';
		display: flex;
		justify-content: center;
		width: 100%;
	}
	.library_link>h2{
		background: $fluttershyThemeColor2;
		width:100%;
		padding: 0px 0px 10px 0px;
		font-size: 2.5em;
		line-height: 1.7em;


	}

	.library_link>h2:hover{

	}
	.library_link a{
		color: #fff;
		text-decoration: none;
		/*background: linear-gradient(150deg, #f76f7f, #fffd75, #75ffdd, #75e1ff, #757cff, #c174fc, #fa74fc);
  		background-size: 600% 200%;
  		-webkit-background-clip: text;
  		-webkit-text-fill-color: transparent;
  		-webkit-animation: rainbow 10s ease infinite;
  		animation: rainbow 10s ease infinite;*/
  		font-size: 1em;
  		line-height: 1em;

	}
	@-webkit-keyframes rainbow {
  0% { background-position: 0% 50% }
  50% { background-position: 100% 50% }
  100% { background-position: 0% 50% }
}

@keyframes rainbow {
  0% { background-position: 0% 50% }
  50% { background-position: 100% 50% }
  100% { background-position: 0% 50% }
}
.themeSwitch{
	position: absolute;
	top: 0;
	right: 0;
	width: 100px;
	color: $fluttershyThemeColor2;
	font-weight: bolder;
}
.themeSwitch option{
	border: none;
	padding: 10px;
	width: 100%;
	border-radius: 0px 0px 0px 30px;

}
.fluttershyHeader .themeSwitch option{
	background: $fluttershyThemeColor1;
}
.twilightshyHeader .themeSwitch option{
	background: $twilightThemeColor1;
}
.themeSwitch>option{
	font-size: 1.1em;
}
.themeSwitch select{
	list-style-type: none;
	padding: 0;
}
.theme-btn{
	border-radius: 30px 0px 0px 30px !important;
}
.header-image{
	max-width: 100vw;
	background-size: contain;
	background-position: center;
	background-repeat: no-repeat;
}

.fluttershyHeader div.header-image{
	background-image: url('@/arts/fluttershy_reading_by_lemonlimeman_d4adpu7.gif');
	width: 350px;
	height: 220px;
}
.twilightHeader div.header-image{
	background-image: url('@/arts/twilight_reads.gif');
	width: 350px;
	height: 380px;
	z-index: 1;
}
.celestiaHeader div.header-image{
	background-image: url('@/arts/CelestiaReading.png');
	width: 330px;
	height: 265px;
	position: relative;
	top: -10px;
}
.lunaHeader div.header-image{
	background-image: url('@/arts/luna.png');
	width: 370px;
	height: 350px;
	position: relative;
	top: -40px;
}
.twilight_library_link>h2{
	background: $twilightThemeColor2;
}

.celestia_library_link>h2{
	background: $celestiaThemeColor2;
}
.luna_library_link>h2{
	background: $lunaThemeColor2;
}
.component-container{
	position: absolute;
	right: 0;
	width: 120px;
}
 .component__select {
   height: 38px;
   line-height: 1.5em;
   display: grid;
   max-width: 500px;
   font-weight: bolder;

.component__select--name{
	font-size: 1.2em;
}

 }
.fluttershyHeader .component__select--name{
	background-color: $fluttershyThemeColor1;
	color: white;
}
.twilightHeader .component__select--name{
	background-color: $twilightThemeColor1;
	color: white;
}
.celestiaHeader .component__select--name{
	background-color: $celestiaThemeColor3;
	color: $celestiaThemeColor2;
}
.lunaHeader .component__select--name{
	background-color: $lunaThemeColor3;
	color: $lunaThemeColor1;
}
 .component__select--name {
   padding: 0 25px;
   cursor: pointer;
   padding: 5px 10px 0 20px;
   border-radius: 0px 0px 0px 40px;
   background-color: white;
 }


 .component__select-options {
   border-top: none;
   overflow: auto;
   position: absolute;
   z-index: 1500;
   max-width: 500px;
   margin: 0;
   padding: 0;
   top: 38px;
 }

 .select--option {

   display: grid;
   align-content: center;
   padding: 5px 5px 5px 15px;
   background-color: #f5f5fa;
   border-radius: 40px 0 0px 40px;
 }



 .select--option:nth-child(2n) {
   background-color: #ffffff;
 }

 .select--option input{
   display: none;
 }

 .single-option {
   height: 55px;
   background-color: #2595ec;
   font-size: 0.8rem;
   border: 1px solid red;
 }

 .cust-sel {
   width: 200px;
   height: 38px;
   background-color: #f5f5fa;
   border: 1px solid #dddddd;
 }

 .cust-sel:focus {
   outline-width: 0;
 }
</style>