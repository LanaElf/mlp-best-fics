<template>
	<button class="btn">
		<slot></slot>
	</button>
</template>

<script>
	export default{
		name: 'ff-button'
	}
</script>

<style>
@font-face{
    font-family: "celestia";
    src: './../fonts/celestiareduxmedium.ttf';
  }
  @font-face{
    font-family: "vollcorn";
    src: './../fonts/Vollkorn-Medium.ttf';
  }
  
.btn{
	font-family: "vollcorn";
	background: teal;
	color: white;
	border: none;
	text-decoration: none;
	padding: 10px 20px;
	border-radius: 20px;
	box-shadow: 0px 2px 5px #ddd;
	font-size: 17px
	
}
.btn:hover{
	background: #005067;
	transition: 0.3s;
}
</style>