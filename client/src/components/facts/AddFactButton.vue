<template>
    <q-btn ripple fab round class="btnColor all-pointer-events" 
  	@click="$emit('click')" size="xl" color="positive" icon="add"/>
</template>
<script>
export default {
    name:"AddFactButton"
}
</script>
<style scoped>
.btnColor{
	background-color: #374c72;
	color: white
}
</style>