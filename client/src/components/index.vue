<template>
  <div id="app">
    <appHeader>

    </appHeader>

    <transition name="fade" mode="" appear css>
      <router-view></router-view>
    </transition>

    <app-footer>
        
    </app-footer>
  </div>
</template>

<script>
import appFooter from "@/components/layout/footer/index";
import appHeader from "@/components/layout/header/index";

export default {
  name: "App",
  data() {
    return {};
  },
  components: {
    appFooter,
    appHeader
  }
};
</script>

<style>

</style>
