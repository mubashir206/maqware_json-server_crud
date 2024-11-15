<template>
<HeaderPage></HeaderPage>
<router-view></router-view>
<FooterPage></FooterPage>
</template>

<script>
import FooterPage from './components/layout/FooterPage.vue';
import HeaderPage from './components/layout/HeaderPage.vue';


export default {
  name: 'App',

  components: {
   HeaderPage,
   FooterPage
  }
}
</script>

<style>

</style>
