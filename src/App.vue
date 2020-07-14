<template>
  <div id="q-app">
    <transition
      fade
      enter-active-class="animated fadeIn"
      leave-active-class="animated fadeOut"
    >
    <router-view />
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  // methods: {
  //   beforeLeave(element) {
  //     this.prevHeight = getComputedStyle(element).height;
  //   },
  //   enter(element) {
  //     const { height } = getComputedStyle(element);

  //     element.style.height = this.prevHeight;

  //     setTimeout(() => {
  //       element.style.height = height;
  //     });
  //   },
  //   afterEnter(element) {
  //     element.style.height = "auto";
  //   },
  // },
}
</script>
<style>
  a{
    color: #166c7d;
  }
  p{
    font-size: 16px;
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
/* .fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: height, opacity;
  transition-timing-function: ease;
  overflow: hidden;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
} */
</style>