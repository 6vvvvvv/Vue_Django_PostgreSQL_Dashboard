<template>
  <el-input
    v-model="input"
    @change="inputhandler"
    placeholder="Search"
  ></el-input>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      input: "",
      trend3h: []
    };
  },
  methods: {
    /**
     * It is not necessarily to use vuex which can be simply implemented by $emit
     * method by passing the state back to parent, I just explore the usage of vuex.
     */
    inputhandler() {
      axios
        .get(
          `http://api.openweathermap.org/data/2.5/forecast?q=${this.input.toLowerCase()}&appid=34e35ced0edac102f995450c1b6d4bae`
        )
        .then(res => {
          this.trend3h = res.data.list.slice(1, 8);

          this.$store.commit("inputresulthandler", this.input);

          this.$store.commit("trend3hhandler", this.trend3h);
        })
        .catch(err => {
          console.log("typein err", err);
          alert(
            "Please check you input, there might be a typo or the place does't not registered in API"
          );
        });
    }
  }
};
</script>
