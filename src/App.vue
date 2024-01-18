<template>
  <div id="app">
    <router-link class="router-link" to="/">會員資訊</router-link>｜
    <router-link class="router-link" to="/books">所有書籍資訊</router-link>｜
    <router-link class="router-link" to="/rentedBooks"
      >已租借書籍資訊</router-link
    >
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style lang="scss" scoped>
@import "vue2-components.styles/global.import.scss";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
