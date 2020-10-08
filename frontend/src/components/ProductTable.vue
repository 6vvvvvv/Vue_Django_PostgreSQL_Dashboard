<template>
  <div class="product-table">
    <el-table :data="tableData" :height="323" style="width: 100%">
      <el-table-column label="PRODUCT" width="370">
        <template slot-scope="scope">
          <img
            :src="require(`../assets/product/${scope.row.icon}`)"
            alt="icon"
          />
          <span>{{ scope.row.product }}</span>
        </template>
      </el-table-column>
      <el-table-column label="AVAILABILITY" width="200">
        <template slot-scope="scope">
          <el-popover trigger="hover" placement="top">
            <p>Availability: {{ scope.row.availability }}</p>
            <div slot="reference" class="name-wrapper">
              <el-tag size="medium">{{ scope.row.availability }}</el-tag>
            </div>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column prop="total" label="TOTAL" width="200">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      icon: require("../assets/product/Product.Img.png"),

      tableData: [
        {
          icon: "Product.Img.png",
          product: "Women's Vintage Peacoat",
          availability: "320 In Stock",
          total: "$29192"
        },
        {
          icon: "Product.Img2.png",
          product: "Women's Vintage Peacoat",
          availability: "320 In Stock",
          total: "$29192"
        },
        {
          icon: "Product.Img3.png",
          product: "Women's Vintage Peacoat",
          availability: "320 In Stock",
          total: "$29192"
        }
      ]
    };
  }
};
</script>

<style>
td.el-table_1_column_1 div.cell span {
  position: absolute;
  margin-left: 10px;
  margin-top: 10px;
}
</style>
