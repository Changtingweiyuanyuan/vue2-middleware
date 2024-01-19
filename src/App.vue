<template>
  <div id="app" class="d-flex flex-column">
    <div class="nav h5">
      <div class="nav__logo px-4 py-1">
        <img src="@/assets/logo.png" />
      </div>
      <router-link class="router-link px-4 py-2" to="/">會員資訊</router-link>
      <router-link class="router-link px-4 py-2" to="/books"
        >所有書籍資訊</router-link
      >
      <router-link class="router-link px-4 py-2" to="/rentedBooks"
        >已租借書籍資訊</router-link
      >
    </div>
    <div class="main flex-grow-1 container my-2">
      <router-view />
    </div>
    <div class="footer mx-4 my-2 h6">
      <marquee>文字</marquee>
    </div>
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

$background: #eef7f2;
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $gray-900;
  height: 100vh;
  background: $background;

  .nav {
    border-bottom: 1px solid $gray-400;
    & > * {
      border-right: 1px solid $gray-400;
    }

    &__logo img {
      width: 30px;
      height: 30px;
    }
  }

  .footer {
    color: $gray-600;
  }

  a {
    color: $gray-900;
    text-decoration: none;
  }
}
</style>
