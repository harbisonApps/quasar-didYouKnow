<template>
  <q-page padding>
    <div class="row justify-center">
      <h1>About This App</h1>
    </div>
    <div class="q-px-md">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur optio libero adipisci, 
        sed officiis ad pariatur expedita blanditiis dolor autem tempore iure eveniet, harum 
        suscipit hic illo quam assumenda! Distinctio.
      </p>
      <q-list bordered padding>
        <q-item-label header>More</q-item-label>
        <q-item
          to="/about/accessibility"
          tag="label"
          v-ripple>
        <q-item-section>		  
            <q-item-label><q-icon class="avatar" name="accessibility_new"/>Accessibility</q-item-label>
        </q-item-section>
          <q-item-section side >
            <q-icon name="chevron_right" /> 
          </q-item-section>
        </q-item>
        <q-item
          to="/about/help"
          tag="label"
          v-ripple>
          <q-item-section>
            <q-item-label><q-icon class="avatar" name="help_outline"/>Help</q-item-label>
          </q-item-section>
          <q-item-section side >
            <q-icon name="chevron_right" /> 
          </q-item-section>
        </q-item>
        <q-item
          @click="visitOurWebsite"
          tag="label"
          v-ripple>
          <q-item-section>
            <q-item-label><q-icon class="avatar" name="web"/>Visit Harbison Apps</q-item-label>
          </q-item-section>
          <q-item-section side >
            <q-icon name="chevron_right" /> 
          </q-item-section>
        </q-item>
        <q-item
          @click="emailUs"
          tag="label"
          v-ripple>
          <q-item-section>
            <q-item-label><q-icon class="avatar" name="mail_outline"/>Email us</q-item-label>
          </q-item-section>
          <q-item-section side >
            <q-icon name="chevron_right" /> 
          </q-item-section>
        </q-item>
      </q-list>
    </div>
  </q-page>
</template>

<script>
import { openURL } from 'quasar'
export default {
  name: 'PageAbout',
  methods: {
			visitOurWebsite() {
				openURL('https://github.com/harbisonApps')
			},
			emailUs() {
				window.location.href = 'mailto:harbisonapps@gmail.com?subject=Did You Know: Feedback'
			}
		}
}
</script>
<style scoped>
  .avatar{
		font-size: 1.5rem;
		margin-right: 1rem
	}
</style>