<template>
  <div class="members">
    <div v-for="members in _staMembers" :key="members.id">
      {{ members.name }}
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { TYPES as ACTIONS_TYPES } from "@/pages/members/store/actions";
export default {
  name: "PageMembers",
  data() {
    return {
      members: [],
    };
  },
  computed: {
    ...mapState({
      _staMembers: (state) => state.members.list,
    }),
  },
  mounted() {
    this._actGetMembers().then(() => {
      console.log(this._staMembers);
    });
  },
  methods: {
    ...mapActions({
      _actGetMembers: `members/${ACTIONS_TYPES.GET_MEMBERS}`,
    }),
  },
};
</script>

<style scoped></style>
