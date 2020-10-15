<template>
  <div class="quick-details">
    <div class="quick-details-title">
      <p class="qd">Quick Details</p>
      <ul class="quick-details-list">
        <li
          v-for="item in items"
          v-bind:key="item.id"
          class="quick-details-item"
        >
          <img
            :src="require(`../assets/product/${item.icon}.png`)"
            alt="icon"
          />
          <p class="status">{{ item.status }}</p>
          <p class="detail">{{ item.detail }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "QuickDetail",
  data() {
    return {
      items: [
        {
          key: 1,
          icon: "Icon4",
          status: "Last 24 Hours",
          detail: "290 new customers"
        },
        {
          key: 2,
          icon: "Icon5",
          status: "Awaiting Process",
          detail: "490 orders"
        },
        {
          key: 3,
          icon: "Icon6",
          status: "On Hold",
          detail: "120 orders"
        },
        {
          key: 4,
          icon: "Icon7",
          status: "Low in Stock",
          detail: "490 orders"
        },
        {
          key: 5,
          icon: "Icon8",
          status: "Out of Stock",
          detail: "42 items"
        }
      ]
    };
  }
};
</script>

<style src="@/styles/ComponentCss/QuickDetail.css"></style>
