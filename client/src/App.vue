<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
<style>
  a{
    color: #166c7d;
  }
  p{
    font-size: 15px;
    text-indent: 8px;
  }
  h1{
	font-size: 2rem;
  line-height: 2rem;
}
h2{
	font-size: 1.5rem;
  line-height: 1.8rem;
}
  .q-item__label{
		font-size: 15px
	}
</style>