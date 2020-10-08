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

<style>
div.quick-details {
  display: block;
  margin: 0;
  padding: 0;
  width: 370px;
  height: 370px;
  background-color: white;
}

p.qd {
  padding: 20px;
  padding-top: 20px;
  font-family: Source Sans Pro;
  font-size: 18px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 13px;
  letter-spacing: 0px;
  color: #4d4f5c;
}

ul.quick-details-list {
  list-style-type: none;
  margin-left: 20px;
  padding: 0;
}

ul.quick-details-list li {
  position: relative;
  border-bottom: solid 1px #f1f1f3;
  margin-bottom: 10px;
}

p.status {
  display: inline-block;
  position: absolute;
  margin-left: 20px;
  margin-top: 8px;
  font-family: Source Sans Pro;
  font-size: 13px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 20px;
  letter-spacing: 0px;
  color: #4d4f5c;
  opacity: 0.5;
}

p.detail {
  display: inline-block;
  position: absolute;
  right: 15px;
  margin-top: 5px;
  font-family: Source Sans Pro;
  font-size: 15px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 25px;
  letter-spacing: 0px;
  color: #43425d;
}


</style>
