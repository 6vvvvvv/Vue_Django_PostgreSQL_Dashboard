<template>
  <GmapMap
    :center="{ lat: 35.8617, lng: 104.1954 }"
    :zoom="7"
    map-type-id="terrain"
    style="width: 490px; height: 479px"
  >
    <GmapMarker
      :key="index"
      v-for="(m, index) in markers"
      :position="m.position"
      :clickable="true"
      :draggable="true"
      @click="center = m.position"
    />
  </GmapMap>
</template>

<script>
export default {
  name: "Map"
};
</script>

<style></style>
