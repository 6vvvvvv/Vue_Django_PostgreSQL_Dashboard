<template>
  <div id="product">
    <div class="product-side">
      <SideBar />
    </div>
    <div class="product-container column">
      <div class="product-title col-1"><p>Products</p></div>
      <div class="product-card-container col-2">
        <ProductCard
          v-for="item in items"
          v-bind:key="item.id"
          v-bind:icon="item.icon"
          v-bind:num="item.num"
          v-bind:desc="item.desc"
        />
      </div>
      <div class="product-detail col-5">
        <div class="product-detail-producttable">
          <p>Top Products</p>
          <ProductTable />
        </div>
        <div class="product-detail-quickdetail"><QuickDetail /></div>
      </div>
      <div class="product-chart col-4">
        <div class="product-chart-pie">
          <div class="product-chart-pie-title">
            <p class="money-stats">Money Stats</p>
            <p class="total-budgets">Total Budgets</p>
            <p class="amount">$50,000</p>
          </div>
          <div class="product-chart-pie-content">
            <ProductPieChart />
            <div class="product-chart-pie-content-left">
              <p>Total Spend</p>
              <p>$18570</p>
            </div>
            <div class="product-chart-pie-content-right">
              <p>Money Saved</p>
              <p>$31340</p>
            </div>
          </div>
        </div>
        <div class="product-chart-bar">
          <div class="product-chart-bar-title">
            <p class="net-income">Net Income</p>
            <p class="AVG">AVG.$5309</p>
          </div>
          <div class="product-bar-pie-content"><ProductBarChart /></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SideBar from "../components/SideBar";
import ProductCard from "../components/ProductCard";
import ProductTable from "../components/ProductTable";
import QuickDetail from "../components/QuickDetail";
import ProductPieChart from "../components/ProductPieChart";
import ProductBarChart from "../components/ProductBarChart";

export default {
  name: "Product",
  data: () => ({
    items: [
      { id: 1, icon: "Icon2", num: "50,000", desc: "Total Revenue" },
      { id: 2, icon: "Icon1", num: "1,250", desc: "Revenue" },
      { id: 3, icon: "Icon", num: "+2.0%", desc: "Growth" }
    ]
  }),
  components: {
    SideBar,
    ProductCard,
    ProductTable,
    QuickDetail,
    ProductPieChart,
    ProductBarChart
  }
};
</script>

<style src="@/styles/ViewCss/Products.css"></style>
