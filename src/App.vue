<template>
  <div id="app" class="d-flex flex-column">
    <div class="nav h6">
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
      <marquee>{{ MARQUEE_TEXT[this.$route.name] }}</marquee>
    </div>
  </div>
</template>

<script>
const MARQUEE_TEXT = {
  members:
    "會員資訊頁面需預先載入'members'、'books' 以及 'rentedBooks' 三個資料表的資料",
  books: "所有書籍頁面需預先載入'books'、'rentedBooks' 兩個資料表的資料",
  rentedBooks:
    "已租借書籍頁面需預先載入'books'、'rentedBooks' 兩個資料表的資料",
};
export default {
  name: "App",
  components: {},
  data() {
    return {
      MARQUEE_TEXT,
    };
  },
};
</script>

<style lang="scss">
@import "vue2-components.styles/global.import.scss";

$background: #eef7f2;
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $gray-900;
  min-height: 100vh;
  height: 100%;
  background: $background;

  .nav {
    border-bottom: 1px solid $gray-400;
    & > * {
      border-right: 1px solid $gray-400;
    }

    &__logo {
      width: 100%;
      border-right: none;
      border-bottom: 1px solid $gray-400;
      @include media-breakpoint-up(sm) {
        width: auto;
        border-right: 1px solid $gray-400;
        border-bottom: none;
      }
      img {
        width: 30px;
        height: 30px;
      }
    }
  }

  .footer {
    color: $gray-600;
    marquee {
      margin-top: 120px;
    }
  }

  a {
    color: $gray-900;
    text-decoration: none;
  }
}
</style>
