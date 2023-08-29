<template>
	<a 
        :class="{
            fluttershyStick: $store.state.themes[0].isActive,
            twilightStick: $store.state.themes[1].isActive,
            celestiaStick: $store.state.themes[2].isActive,
            lunaStick: $store.state.themes[3].isActive,
        }"
        id="page_up_down_button" href="#library-link"
    >
        Наверх
    </a>
</template>

<script>
	export default{
		name: 'stickyBtn'
	}
</script>

<style lang="scss" scoped>
@import "@/variables.scss";

#page_up_down_button{
    position: fixed;
    bottom: 0px;
    color: white;
    text-decoration: none;
    text-transform: uppercase;
    padding: 15px;
    border-radius: 20px 20px 0 0;
    font-weight: bolder;
    font-size: 14px;
}
.fluttershyStick{
    background: $fluttershyThemeColor1;
}
.twilightStick{
    background: $twilightThemeColor2;
}
.celestiaStick{
    background: $celestiaThemeColor2;
}
.lunaStick{
    background: $lunaThemeColor3;
}
.fluttershyStick:hover{
    background: $fluttershyThemeColor2;
    transition: 0.3s;
}
.twilightStick:hover{
    background: $twilightThemeColor1;
    transition: 0.3s;
}
.celestiaStick:hover{
    background: $celestiaThemeColor4;
    transition: 0.3s;
}
.lunaStick:hover{
    background: $lunaThemeColor2;
    transition: 0.3s;
}

</style>