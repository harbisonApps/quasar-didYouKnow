<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />
        <BackButton/>
        <q-toolbar-title class="absolute-center q-pl-xl q-ml-xl">
           Did You Know
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      :width="190"
      :breakpoint="1025"
      bordered
      content-class="bg-secondary text-black"
    >
      <q-list>
        <q-item-label header class="text-black"> 
          Version <span class="text-weight-bold">{{ appVersion }}</span>
        </q-item-label>
        <q-item
          v-for="nav in navs"
          :key="nav.label"
          exact
          class="text-black"
          clickable
          :to="nav.to"
        >
          <q-item-section avatar>
            <q-icon :name="nav.icon" />
          </q-item-section>
          <q-item-section>
            <q-item-label>{{ nav.label }}</q-item-label>
          </q-item-section>
        </q-item>
        <q-item exact class="text-black" clickable to="/about/accessibility">
          <q-item-section avatar>
            <q-icon name="accessibility_new"/>
          </q-item-section>
          <q-item-section>
            <q-item-label>Accessibility</q-item-label>
          </q-item-section>
        </q-item>
        <q-item v-if="!loggedIn" exact class="text-black" clickable to="/auth">
          <q-item-section avatar>
            <q-icon name="account_circle"/>
          </q-item-section>
          <q-item-section>
            <q-item-label>Login</q-item-label>
          </q-item-section>
        </q-item>
        <q-item v-else exact class="text-black" clickable to="/auth">
          <q-item-section avatar>
            <q-icon name="account_circle"/>
          </q-item-section>
          <q-item-section>
            <q-item-label>LogOut</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>
    <q-footer elevated>
      <q-tabs>
        <q-route-tab
          v-for="nav in navs"
          :key="nav.label"
          exact
          :to="nav.to"
          :icon="nav.icon"
          :label="nav.label"
        />
      </q-tabs>
    </q-footer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
// import EssentialLink from 'components/EssentialLink'
export default {
  name: 'MainLayout',

  components: {
    BackButton: require('components/BackButton').default 
  },

  data () {
    return {
      leftDrawerOpen: false,
      appVersion: "0.5.0",
      navs: [
        { to: "/", icon: "home", label: "Home" },
        { to: "/random", icon: "autorenew", label: "Random Fact" },
        { to: "/about", icon: "info", label: "About" }
      ],
      loggedIn: false
    }
  }
}
</script>
