<template>
  <div class="books">
    <div v-for="books in _staBooks" :key="books.id">
      {{ books }}
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
      _staMembers: (state) => state.members.list,
      _staBooks: (state) => state.books.list,
      _staRentedBooks: (state) => state.rentedBooks.list,
    }),
  },
  mounted() {
    console.log(
      "books page: ",
      this._staMembers,
      this._staBooks,
      this._staRentedBooks
    );
    // this._actGetBooks().then(() => {
    // console.log(this._staBooks);
    // });
  },
  methods: {
    ...mapActions({
      _actGetBooks: `books/${ACTIONS_TYPES.GET_BOOKS}`,
    }),
  },
};
</script>

<style scoped></style>
