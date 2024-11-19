<template>

	<footer
		:class="{
			fluttershyFooter: $store.state.themes[0].isActive,
			twilightFooter: $store.state.themes[1].isActive,
			celestiaFooter: $store.state.themes[2].isActive,
			lunaFooter: $store.state.themes[3].isActive,
		}">
		<div class="contacts">
			<a href="https://t.me/elf_lana" target="_blank">@elf_lana</a>
			<h4>Источники:</h4>
			<a href="https://ponyfiction.org" target="_blank">ponyfiction.org</a>
			<a href="https://everypony.ru/" target="_blank">everypony.ru</a>
			<a href="https://www.rulit.me/" target="_blank">www.rulit.me</a>
		</div>
	</footer>
</template>

<script scoped>


	export default{
		name: "footerView",


	}
</script>

<style lang="scss">
@import "@/variables.scss";

	footer{
		height: 300px;

		display: grid;
		align-content: center;
		padding-bottom: 20px;
	}
	footer a{
		text-decoration: none;
		color: $fluttershyThemeColor2;
		font-size: 20px;
		text-shadow:  0px 2px 0px white, -2px 0px 0px white, 2px 0px 0px white,  0px -2px 0px white,  2px -2px 0px white,  2px 2px 0px white,  -2px -2px 0px white,  -2px 2px 0px white;
		display: grid;
		padding: 5px;

	}
	.twilightFooter a{
		color: $twilightThemeColor2;
	}
	.celestiaFooter a{
		color: $twilightThemeColor2;
	}
	.lunaFooter a{
		color: $lunaThemeColor2;
	}
	.contacts{


	}
	footer a:hover{
		text-shadow:  0px 3px 10px white, -3px 0px 10px white, 3px 0px 10px white,  0px -3px 10px white, 3px -3px 10px white, 3px 3px 10px white, -3px -3px 10px white, -3px 3px 10px white,;
		transition: 0.3s;
	}
	h4{
		padding: 10px;
	}
</style>