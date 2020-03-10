<template>
<q-page padding>
    <div>
      <q-btn color="secondary" @click="$router.go(-1)">back</q-btn>
    </div>
    <div class="row justify-center q-mb-md">    
    <h2>Admin</h2>
    <AdminFacts v-for="(fact, index) in facts" 
        :fact="fact" :key="index" 
        @deleteFact="deleteFact" 
        @updateFact="updateFact"/>
    </div>
    <div>
      <q-page-sticky position="bottom-right" :offset="[18, 18]">
        <AddFactButton @click="showAddFactModal = true"/>
      </q-page-sticky>
      <q-dialog v-model="showAddFactModal">
        <CreateFact />
      </q-dialog>
    </div>
</q-page>
</template>
<script>
export default {
    components: {
        'AdminFacts': require('components/facts/AdminFacts').default,
        'AddFactButton': require('components/facts/AddFactButton.vue').default,
        'CreateFact' : require('components/facts/CreateFact').default
    },
    data() {
	  	return {
            facts: [],
	  		showAddFactModal: false
	  	}
    },
    methods: {
    deleteFact(id){
      let facts = this.facts.filter(fact => fact._id != id)
      this.facts = facts;
    },
    updateFact(fact){
      this.deleteFact(fact._id);
      this.factCreate(fact);
    },
    factCreate(fact){
        this.facts = [fact, ...this.facts];
    },
  },
//   mounted(){
//     getFacts()
//       .then(data => this.facts = data.facts)
//       .catch((err =>alert(err)));
//   }
}  
</script>    