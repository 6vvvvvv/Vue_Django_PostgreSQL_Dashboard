<template>
  <div id="searchbar">
    <autocomplete
      :search="search"
      placeholder="Search..."
      aria-label="Search for a country"
    ></autocomplete>
  </div>
</template>

<script>
import Autocomplete from "@trevoreyre/autocomplete-vue";

export default {
  name: "Searchbar",
  data() {
    return {
      country: ["France", "Finnand"]
    };
  },
  components: {
    Autocomplete
  },
  methods: {
    search(input) {
      if (input.length < 1) {
        return [];
      }
      return this.country.filter(country => {
        return country.toLowerCase().startsWith(input.toLowerCase());
      });
    }
  }
};
</script>
<style>
input.autocomplete-input {
  padding: 10px;
  width: 100%;
  border-radius: 4px;
  border-color: transparent;
}

ul#autocomplete-result-list-1 {
  background-color: white;
  list-style-type: none;
}
</style>
