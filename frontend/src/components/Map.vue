<template>
  <GmapMap
    :center="{ lat: 45.748, lng: 4.85 }"
    :zoom="7"
    map-type-id="terrain"
    style="width: 475px; height: 475px "
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
