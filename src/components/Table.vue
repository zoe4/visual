<template>
  <div class="table">
    <!-- <v-table
      :columns="tableConfig.columns"
      :table-data="tableConfig.tableData"
    ></v-table> -->
    <!-- <vxe-table :data="tableData">
      <vxe-table-column type="seq" title="Seq" width="60"></vxe-table-column>
      <vxe-table-column field="name" title="Name"></vxe-table-column>
      <vxe-table-column field="sex" title="Sex"></vxe-table-column>
      <vxe-table-column field="address" title="Address"></vxe-table-column>
    </vxe-table> -->

    <el-table
    :data="tableData"
    stripe
    style="width: 100%">
    <el-table-column
      prop="id"
      label="日期"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="180">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址">
    </el-table-column>
  </el-table>

    

  </div>
</template>

<script>
// import 'vue-easytable/libs/theme-dark/index.css'
// import {VTable} from 'vue-easytable';
export default {
  name: "Table",
  components: {
    // 'v-table':VTable,
  },
  props: {
    msg: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      items: [],
      total: 100,
      columns: [],
      actions: [],
      tableData: [
        {
          id: 10001,
          name: "Test1",
          role: "Develop",
          sex: "Man",
          address: "Shenzhen",
        },
        {
          id: 10002,
          name: "Test2",
          role: "Test",
          sex: "Man",
          address: "Guangzhou",
        },
        {
          id: 10003,
          name: "Test3",
          role: "PM",
          sex: "Man",
          address: "Shanghai",
        },
      ],
      tableConfig: {
        tableData: [],
        columns: [
          {
            field: "id",
            title: "编号",
            width: 50,
            columnAlign: "center",
          },
          {
            field: "name",
            title: "姓名",
            width: 120,
            columnAlign: "center",
          },
          {
            field: "age",
            title: "年龄",
            width: 50,
            columnAlign: "center",
          },

          {
            field: "height",
            title: "身高",
            width: 100,
            columnAlign: "left",
          },
          {
            field: "sex",
            title: "性别",
            width: 50,
            columnAlign: "center",
          },
          {
            field: "score",
            title: "成绩",
            width: 80,
            columnAlign: "center",
          },
        ],
      },
    };
  },
  created() {},
  methods: {},
};
</script>


<style lang="scss" scoped>
.table {
}
</style>
