<template>
  <el-input
    v-model="input"
    @change="inputhandler"
    placeholder="Search"
  ></el-input>
</template>

<script>
export default {
  data() {
    return {
      input: ""
    };
  },
  methods: {
    inputhandler() {
      this.$store.commit("inputresulthandler", this.input);
      console.log("storeafterinputhandler", this.$store.state.inputresult);
    }
  }
};
</script>
