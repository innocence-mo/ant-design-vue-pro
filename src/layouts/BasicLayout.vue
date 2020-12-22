<template>
  <div>
    <Header />
    <sider-menu />
    <router-view></router-view>
    <Footer />
  </div>
</template>
<script>
import Header from './Header'
import Footer from './Footer'
import SiderMenu from './SiderMenu.vue'
export default {
  components: {
    Header,
    Footer,
    SiderMenu,
  },
}
</script>
