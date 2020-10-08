<template>
  <div id="product">
    <div class="product-side">
      <SideBar />
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

<style>
div#product {
  position: relative;
  width: calc(100% - 325px);
}

div.product-side {
  position: relative;
}

div.product-container {
  position: relative;
  width: 1170px;
  top: 70px;
  left: 325px;
}

div.product-card-container {
  display: flex;
  justify-content: space-between;
}

div.product-detail {
  position: relative;
}

div.product-detail-producttable {
  position: relative;
  display: inline-block;
  width: 770px;
  margin-top: 40px;
  background-color: white;
}

div.product-detail-producttable p {
  margin-left: 20px;
  margin-top: 20px;
  font-family: Source Sans Pro;
  font-size: 18px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 13px;
  letter-spacing: 0px;
  color: #4d4f5c;
}

div.product-detail-quickdetail {
  display: inline-block;
  position: absolute;
  width: 200px;
  margin-left: 31px;
  margin-top: 40px;
}

div.product-chart {
  display: block;
  position: relative;
  margin-top: 35px;
}

div.product-chart-pie {
  position: absolute;
  width: 505px;
  height: 650px;
  background-color: white;
}

div.product-chart-pie-title {
  border-bottom: solid 1px #f1f1f3;
  margin-bottom: 20px;
}

p.money-stats {
  margin-left: 20px;
  margin-top: 20px;
  font-family: Source Sans Pro;
  font-size: 18px;
  font-weight: normal;
  font-stretch: normal;
  letter-spacing: 0px;
  color: #4d4f5c;
}

p.total-budgets {
  display: inline-block;
  margin-left: 20px;
  margin-top: 20px;
  font-family: Source Sans Pro;
  font-size: 15px;
  font-weight: normal;
  font-stretch: normal;
  letter-spacing: 0px;
  color: #43425d;
}

p.amount {
  display: inline-block;
  position: absolute;
  margin-top: 20px;
  right: 20px;
  font-family: Source Sans Pro;
  font-size: 15px;
  font-weight: bold;
  font-stretch: normal;
  letter-spacing: 0px;
  color: #4ad991;
}

div.product-chart-pie-content-left {
  display: inline-block;
  margin-left: 20px;
  font-family: Source Sans Pro;
  font-size: 15px;
  font-weight: normal;
  font-stretch: normal;
  letter-spacing: 0px;
  color: #43425d;
}

div.product-chart-pie-content-right {
  display: inline-block;
  position: absolute;
  right: 0;
  margin-right: 20px;
  font-family: Source Sans Pro;
  font-size: 15px;
  font-weight: normal;
  font-stretch: normal;
  letter-spacing: 0px;
  color: #43425d;
}

div.product-chart-bar {
  display: inline-block;
  position: absolute;
  background-color: white;
  width: 630px;
  height: 650px;
  right: 0;
}

div.product-chart-bar-title {
  border-bottom: solid 1px #f1f1f3;
}

div.product-bar-pie-content {
  width: 100%;
  margin-top: 50px;
  padding-left: 30px;
}

p.net-income {
  margin-left: 20px;
  margin-top: 20px;
  font-family: Source Sans Pro;
  font-size: 18px;
  font-weight: normal;
  font-stretch: normal;
  letter-spacing: 0px;
  color: #4d4f5c;
}

p.AVG {
  margin-left: 20px;
  margin-top: 35px;
  font-family: Source Sans Pro;
  font-size: 15px;
  font-weight: normal;
  font-stretch: normal;
  letter-spacing: 0px;
  color: #43425d;
}
</style>
