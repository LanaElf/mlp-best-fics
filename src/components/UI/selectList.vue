<template>
	<select v-bind="modelValue" @change="changeOptions">
		<option disabled value="">Выберите главу</option>
		<option 
			v-for="option in options" 
			:key="option.value" 
			value="option.value"
		>
			{{ option.name }}
		</option>
	</select>
</template>

<script>
	export default{
		name: 'selectList',
		props:{
			modelValue: {
				type: String
			},
			options:{
				type: Array,
				default: () => []

			}
		},
		methods:{
			changeOption(event){
				console.log(event);
				this.$emit('update:modelValue', event)
			}
		}
	}
</script>

<style scoped>
	
</style>