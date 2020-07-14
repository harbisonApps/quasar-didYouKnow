<template>
    <q-page padding>
      <div class="row justify-center q-mb-md">
        <q-img src="~assets/reading_list.svg" style="max-width: 450px;"
            contain/>
        </div>
        <div class="row justify-center q-mb-md">
    <q-card class="card">
      <q-card-section>
        <p class="text-h6">{{ fact.name }}</p>
      <!-- </q-card-section>
      <q-card-section> -->
        <q-img class="rounded-borders" 
            :src="fact.imageUrl ? fact.imageUrl : 'statics/image-placeholder.png'"
            basic contain/>
      </q-card-section>
      <q-card-section>
		<p  class="cat" v-if="fact.category">{{ fact.category }}</p>
    	<p class="cat" v-else>No category provided.</p>
	<!-- </q-card-section>
      <q-card-section> -->
        <p v-if="fact.description">{{ fact.description }}</p>
    	<p v-else>No description provided.</p>
      <!-- </q-card-section>
    <q-card-section> -->
        <p v-if="fact.fullText">{{ fact.fullText }}</p>
    	<p v-else>Full text coming soon</p>
    </q-card-section>
    </q-card>
    </div>
    </q-page>
</template>
<script>
 //import {mapGetters} from 'vuex'
export default {
    name: 'PageRandomFact',
    // props: ['fact'],
    data() {
      return {
        fact: {
          name:'Random Fact #3649',
          category: 'Random ',
          description: 'A random fact',
          fullText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, dignissimos? Architecto quia ab mollitia ea voluptatum magni fugit velit eveniet earum repudiandae dolorem impedit, eaque quibusdam explicabo placeat perferendis harum.',
          imageUrl: ''
        }
      }
    },
    computed: {
//	  	...mapGetters('facts', ['fact'])
    }
    
}
</script>
<style scoped>
  .card {
        /* margin-left: 50px; */
		min-height: 400px;
		max-width: 400px;
		width: 400px;
		transition: background 0.3s;
  }
  .cat{
    color: #22293d;
    font-weight: bold;
  }
</style>