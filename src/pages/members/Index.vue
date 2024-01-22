<template>
  <div class="members">
    <div class="members__title d-flex justify-content-center align-items-start">
      <span class="h4 text-success">會員資訊</span>
      <img src="@/assets/icons/star.png" />
    </div>
    <div class="members__list d-flex flex-wrap gap-2">
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
        <div class="members__list__card--rented-book">
          <span class="field rounded text-white me-2 h6">
            {{ MEMBER_CARD_FIELDS.RENTED_BOOK_COUNT }}
          </span>
          {{ members.rented_book_count }}
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
    }),
  },
  data() {
    return {
      MEMBER_CARD_FIELDS,
    };
  },
  mounted() {
    console.log("members page: ", this._staMembers);
    // this._actGetMembers().then(() => {
    //   console.log(this._staMembers);
    // });
    this.$toast.success("成功");
  },
  methods: {
    ...mapActions({
      _actGetMembers: `members/${ACTIONS_TYPES.GET_MEMBERS}`,
    }),
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
      &--rented-status {
        img {
          width: 20px;
          height: 20px;
        }
      }
      .field {
        background: $morandi-green;
        padding: 2px 4px;
      }
    }
  }
}
</style>
