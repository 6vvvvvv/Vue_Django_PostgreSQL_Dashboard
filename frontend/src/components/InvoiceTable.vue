<template>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column prop="id" label="#"> </el-table-column>
    <el-table-column prop="item" label="ITEM"> </el-table-column>
    <el-table-column prop="description" label="DESCRIPTION" width="400">
    </el-table-column>
    <el-table-column prop="quantity" label="QUANTITY"> </el-table-column>
    <el-table-column prop="price" label="PRICE"> </el-table-column>
  </el-table>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          id: 1,
          item: "Woman Peacoat",
          description: "Lorem ipsum dolor sit amet consectetur",
          quantity: "432",
          price: "$9928"
        },
        {
          id: 2,
          item: "Woman Peacoat",
          description: "Lorem ipsum dolor sit amet consectetur",
          quantity: "432",
          price: "$9928"
        },
        {
          id: 3,
          item: "Woman Peacoat",
          description: "Lorem ipsum dolor sit amet consectetur",
          quantity: "432",
          price: "$9928"
        }
      ]
    };
  }
};
</script>

<style>
table.el-table__header th {
  background-color: #f5f6fa;
}
</style>
