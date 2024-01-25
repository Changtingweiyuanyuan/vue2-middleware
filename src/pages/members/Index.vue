<template>
  <div class="members">
    <div class="members__title d-flex justify-content-center align-items-start">
      <span class="h4 text-success">會員資訊</span>
      <img src="@/assets/icons/star.png" />
    </div>
    <div
      class="members__list d-flex flex-wrap justify-content-center gap-2 mt-4"
    >
      <div
        v-for="members in _staMembers"
        :key="members.id"
        class="members__list__card d-flex flex-column align-items-start rounded p-2 t5"
      >
        <div class="members__list__card--name mb-1">
          <span class="field rounded text-white me-2 h6">
            {{ MEMBER_CARD_FIELDS.NAME }}
          </span>
          {{ members.name }}
        </div>
        <div class="members__list__card--birthday mb-1">
          <span class="field rounded text-white me-2 h6">
            {{ MEMBER_CARD_FIELDS.BIRTHDAY }}
          </span>
          {{ members.birthday }}
        </div>
        <div class="members__list__card--rented-status mb-1">
          <span class="field rounded text-white me-2 h6">
            {{ MEMBER_CARD_FIELDS.RENTED_BOOK_STATUS }}
          </span>
          <img
            v-if="members.rented_book_count"
            src="@/assets/icons/checkmark.png"
          />
          <img v-else src="@/assets/icons/cancel.png" />
        </div>
        <div
          class="members__list__card--rented-book-count"
          :class="{ 'mb-1': members.rented_book_count }"
        >
          <span class="field rounded text-white me-2 h6">
            {{ MEMBER_CARD_FIELDS.RENTED_BOOK_COUNT }}
          </span>
          {{ members.rented_book_count }}
        </div>
        <div
          v-if="members.rented_book_count"
          class="members__list__card--rented-book-info position-relative"
        >
          <span
            class="field rounded text-white me-2 h6 cursor-pointer"
            @click="togglePopover(members.id)"
          >
            {{ MEMBER_CARD_FIELDS.RENTED_BOOK_INFO }}
          </span>
          <div
            :ref="`popover-${members.id}`"
            class="popover d-none position-absolute bg-white"
          >
            <div class="popover__main position-absolute bg-white rounded p-2">
              <div
                v-for="rentedBooks in getRentedBookInfo(members.id)"
                :key="rentedBooks.id"
                class="popover__main__book d-flex gap-4 pb-4"
              >
                <div class="image position-relative">
                  <img
                    :src="
                      require('@/assets/booksImage/' +
                        rentedBooks.book_id +
                        '.jpeg')
                    "
                    class="position-relative"
                  />
                </div>
                <div class="dividing-line position-relative"></div>
                <div class="d-flex flex-column">
                  <span class="title text-success t5 mb-1">
                    {{ getBookName(rentedBooks.book_id) }}
                  </span>
                  <span class="t6">
                    借閱日期<br />
                    {{ rentedBooks.rental_date }}
                  </span>
                  <span class="t6">
                    到期日期<br />
                    <span
                      :class="{
                        'text-danger': isLessThanThreeDaysFromNow(
                          rentedBooks.due_date
                        ),
                      }"
                    >
                      {{ rentedBooks.due_date }}
                    </span>
                    <img
                      v-if="isLessThanThreeDaysFromNow(rentedBooks.due_date)"
                      src="@/assets/icons/warning.png"
                      class="icon--warning"
                    />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { TYPES as ACTIONS_TYPES } from "@/pages/members/store/actions";
import { MEMBER_CARD_FIELDS } from "./constants";
export default {
  name: "PageMembers",
  computed: {
    ...mapState({
      _staMembers: (state) => state.members.list,
      _staBooks: (state) => state.books.list,
      _staRentedBooks: (state) => state.rentedBooks.list,
    }),
  },
  data() {
    return {
      MEMBER_CARD_FIELDS,
    };
  },
  mounted() {
    // this._actGetMembers().then(() => {
    //   console.log(this._staMembers);
    // });
    // this.$toast.success("成功");
  },
  methods: {
    ...mapActions({
      _actGetMembers: `members/${ACTIONS_TYPES.GET_MEMBERS}`,
    }),
    togglePopover(id) {
      const popovers = document.querySelectorAll(".popover");
      const targetPopover = this.$refs[`popover-${id}`][0];
      popovers.forEach((popover) => {
        if (popover !== targetPopover) {
          popover.classList.add("d-none");
        }
      });
      targetPopover.classList.toggle("d-none");
    },
    getRentedBookInfo(memberId) {
      const rentedBooks = this._staRentedBooks.filter(
        (book) => book.user_id === memberId
      );
      return rentedBooks;
    },
    getBookName(bookId) {
      const book = this._staBooks.find((book) => book.id === bookId);
      return book.book_title;
    },
    isLessThanThreeDaysFromNow(date) {
      const today = new Date();
      const targetDate = new Date(date);
      const diffTime = Math.abs(targetDate - today);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      return diffDays < 7;
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
.members {
  &__title {
    img {
      width: 20px;
      height: 20px;
      animation: rotate180deg 2s forwards;
    }
  }
  &__list {
    &__card {
      width: 100%;
      border: 1px solid $gray-400;
      @include media-breakpoint-up(sm) {
        width: 230px;
      }
      .field {
        background: $morandi-green;
        padding: 2px 4px;
      }
      &--rented-status {
        img {
          width: 20px;
          height: 20px;
        }
      }
      &--rented-book-info {
        .field {
          background: $orange;
          &:hover {
            box-shadow: 1px 1px 1px $success;
          }
        }
        .popover {
          width: 360px;
          height: 160px;
          top: calc(100% + 12px);
          &::before {
            content: "";
            position: absolute;
            display: block;
            width: 12px;
            height: 12px;
            background: $white;
            border: 1px solid $gray-400;
            top: -6px;
            left: 12px;
            transform: rotate(45deg);
          }
          &__main {
            height: 158px;
            overflow-y: scroll;
            &__book {
              .image {
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
                  width: 100px;
                  height: 142px;
                  z-index: 1;
                }
              }
              .dividing-line {
                width: 1px;
                height: 118px;
                top: 12px;
                background: $gray-400;
              }
              .title {
                font-weight: $font-weight-semibold;
              }
              .icon--warning {
                width: 20px;
                height: 20px;
              }
            }
          }
        }
      }
    }
  }
}
</style>
