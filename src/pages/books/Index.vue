<template>
  <div class="books">
    <div class="books__title d-flex justify-content-center align-items-start">
      <span class="h4 text-success">所有可借閱書籍</span>
      <img src="@/assets/icons/star.png" />
    </div>
    <div class="books__list d-flex flex-wrap justify-content-center">
      <div
        v-for="books in _staBooks"
        :key="books.id"
        class="books__list__card d-flex flex-column align-items-center t6 m-2 mt-4"
      >
        <div class="image position-relative mb-3">
          <img
            :src="require('@/assets/booksImage/' + books.id + '.jpeg')"
            class="position-relative w-100 h-100"
          />
        </div>
        <span class="text-danger text-nowrap flex-grow-1">
          {{ books.book_title }}
        </span>
        <span class="mb-1">
          {{ books.author }}
        </span>
        <span class="h6">
          共{{ books.available_copies }} | 剩餘可借閱數量:
          <span
            class="borrowable-quantity"
            :class="{
              'text-danger':
                books.available_copies - getRentedQuantity(books.id) <= 2,
            }"
            >{{ books.available_copies - getRentedQuantity(books.id) }}
          </span>
        </span>
        <div class="dividing-line position-relative"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { TYPES as ACTIONS_TYPES } from "@/pages/books/store/actions";
export default {
  name: "PageBooks",
  computed: {
    ...mapState({
      _staBooks: (state) => state.books.list,
      _staRentedBooks: (state) => state.rentedBooks.list,
    }),
  },
  mounted() {},
  methods: {
    ...mapActions({
      _actGetBooks: `books/${ACTIONS_TYPES.GET_BOOKS}`,
    }),
    getRentedQuantity(bookId) {
      return this._staRentedBooks.filter((book) => book.book_id == bookId)
        .length;
    },
  },
};
</script>

<style lang="scss" scoped>
@keyframes rotate180deg {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(180deg);
  }
}
.books {
  &__title {
    img {
      width: 20px;
      height: 20px;
      animation: rotate180deg 2s forwards;
    }
  }
  &__list {
    &__card {
      width: 200px;
      .image {
        width: 100px;
        height: 142px;
        &::before {
          content: "";
          position: absolute;
          display: block;
          width: 100px;
          height: 142px;
          border: 1px solid $gray-800;
          top: 4px;
          left: 4px;
          z-index: 0;
        }
        img {
          z-index: 1;
        }
      }
      .borrowable-quantity {
        color: $orange;
      }
      .dividing-line {
        width: 160px;
        height: 1px;
        background: $gray-400;
        &::before {
          content: "";
          position: absolute;
          display: block;
          width: 140px;
          height: 1px;
          top: 4px;
          left: 10px;
          background: $gray-400;
        }
      }
    }
  }
}
</style>
