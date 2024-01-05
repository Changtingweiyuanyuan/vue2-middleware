<template>
  <div class="rentedBooks">
    <div v-for="rentedBooks in _staRentedBooks" :key="rentedBooks.id">
      {{ rentedBooks }}
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { TYPES as ACTIONS_TYPES } from "@/pages/rentedBooks/store/actions";
export default {
  name: "PageRentedBooks",
  computed: {
    ...mapState({
      _staMembers: (state) => state.members.list,
      _staRentedBooks: (state) => state.rentedBooks.list,
    }),
  },
  mounted() {
    console.log("rented books page: ", this._staMembers, this._staRentedBooks);
    // this._actGetRentedBooks().then(() => {
    //   console.log(this._staRentedBooks);
    // });
  },
  methods: {
    ...mapActions({
      _actGetRentedBooks: `rentedBooks/${ACTIONS_TYPES.GET_RENTED_BOOKS}`,
    }),
  },
};
</script>

<style scoped></style>
