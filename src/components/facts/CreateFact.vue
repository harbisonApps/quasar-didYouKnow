<template>
    <q-card class="form-card">
        <q-card-section>
            <div class="text-h6 heading"> Add A Fact</div>
        </q-card-section>
        <q-card-section>
            <div class="row ">
                <q-input dense
                    :rules="[
                    val => !!val || '* Required',
                    val => val.length < 21 || 'Please use maximum 20 characters',
                    ]"
                    filled
                    v-model="name"
                    label="Name"
                    class="col"
                    ref="name"/>
            </div>
                <VueSuglify :slugify="name" :slug.sync="slug">
                    <q-input dense v-show="false" disable class="col" slot-scope="{inputBidding}" v-bind="inputBidding"
                        type="text" placeholder="slug ..."/>
                </VueSuglify>
            <div class="row ">
                <q-input dense
                    :rules="[
                    val => !!val || '* Required',
                    val => val.length < 21 || 'Please use maximum 20 characters',
                    ]"
                    filled
                    v-model="category"
                    label="Category"
                    class="col"
                    ref="category" />
            </div>
            <div class="row ">
    		<q-input dense
    			:rules="[
				val => !!val || '* Required',
                    val => val.length < 135 || 'Please use maximum 135 characters',
                ]"
                filled
                v-model="description"
                label="Description"
                class="col"
                ref="description" />
            </div>
            <div class="row ">
    		<q-input dense
    			:rules="[
    		    val => !!val || '* Required',
    		  ]"
		      filled
		      v-model="fullText"
		      label="Full text"
              rows="4"
		      type="textarea"
		      class="col"
		      ref="fullText" />
    	    </div>
            <div class="row ">
            <q-input dense
                filled
                v-model="imageUrl"
                label="Image URL"
                class="col" />
            <q-img
            :src="imageUrl ? imageUrl : 'statics/image-placeholder.png'"
            class="q-ml-sm"
            contain />
            </div>
        </q-card-section>
        <q-card-actions align="right">
            <q-btn name="cancel"
      	        label="Cancel"
                color="grey"
                v-close-popup/>
            <q-btn
      	@click.prevent="submitForm"
      	label="Save"
      	color="green"/>
        </q-card-actions>
    </q-card>
</template>
<script>
import swal from "sweetalert";
import VueSuglify from 'vue-suglify'
export default {
    components:{
			VueSuglify
    },
    data() {
        return {
        name: '',
        category: '',
        description: '',
        fullText: '',
        imageUrl: '',
        slug: ''
        }
    },
    methods: {
       submitForm() {
				this.$refs.name.validate()
				this.$refs.category.validate()
				this.$refs.description.validate()
				this.$refs.fullText.validate()
				
				if (this.$refs.name.hasError && this.$refs.description.hasError) {
					swal("You missed one", "", "warning")
                }
                else {
                    this.submitFact()
                }
			},
			submitFact() {
				let data = {
                    name: this.name, 
                    category: this.category, 
                    description: this.description,
                    fullText: this.fullText,
                    imageUrl: this.imageUrl,
                    slug: this.slug
                    }
                factCreate()
                    .then(
                        swal("Fact Created", "", "success"),
                        this.v-close-popup
                        )
			}
    }
}
</script>
<style scoped>

   
	.form-card {
		min-width: 300px;
	}
	.form-card .heading {
		text-transform: capitalize;
	}
	.form-card .q-card-section {
		width: 100%;
	}
	.thumbnail {
		max-width: 50px;
		max-height: 50px;
	}
	.form-card .q-img {
		height: 56px;
		width: 56px;
		border-radius: 10px;
	}
	.form-card .q-img__image {
		background-size: cover !important;
	}
	.form-card .q-rating__icon {
		opacity: 0.2;
	}
	.form-card .q-rating__icon--active {
		opacity: 1;
	}
</style>