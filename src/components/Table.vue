<template>
  <div class="table">

    <el-table
      :data="data"
      stripe
      style="width: 100%"
    >
      <el-table-column
        prop="outer"
        label="仓库名称1"
      >
      </el-table-column>
      <el-table-column
        prop="inter"
        label="仓库名称2"
      >
      </el-table-column>
      <el-table-column
        prop="eq_name"
        label="装备"
      >
      </el-table-column>
      <el-table-column
        prop="date"
        label="日期"
      >
      </el-table-column>

    </el-table>

  </div>
</template>

<script>
export default {
  name: "Table",
  components: {},
  props: {
    data: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      items: [],
      total: 100,
      columns: [],
      actions: [],
      
    };
  },
  watch: {
    data(val) {
      console.log('val',val)
    },
  },
  created() {},
  methods: {},
};
</script>


<style lang="scss" scoped>
.table {
  margin-top: 1vh;
}
</style>
<style lang="scss">
.el-table {
  background-color: rgba(0, 0, 0, 0);
  color: #fff;
}
.el-table thead {
  color: #fff;
  padding: 5px 0;
}
.el-table th,
.el-table tr {
  background-color: rgba(33, 117, 243, 0.2);
}
.el-table--striped .el-table__body tr.el-table__row--striped td {
  background-color: rgba(33, 117, 243, 0.2);
}
.el-table--enable-row-hover .el-table__body tr:hover > td {
  background-color: rgba(33, 117, 243, 0.2);
}
.el-table td,
.el-table th.is-leaf {
  border-bottom: 1px solid rgba(0, 0, 0, 0);
}
.el-table__body {
  border-bottom: 1px solid rgba(0, 0, 0, 0);
}
.el-table--border::after,
.el-table--group::after,
.el-table::before {
  background-color: rgba(0, 0, 0, 0);
}
.el-table td,
.el-table th {
  padding: 2px 0;
}
.el-table .cell{
  white-space: nowrap;
  font-size: 1.6vh;
}

.el-table--scrollable-x .el-table__body-wrapper{
  overflow: hidden;
}

// .el-table::-webkit-scrollbar {
//  width: 8px;
// }
//  .el-table::-webkit-scrollbar-track {
//  background-color:red;
//  -webkit-border-radius: 2em;
//  -moz-border-radius: 2em;
//  border-radius:2em;
// }
//  .el-table::-webkit-scrollbar-thumb {
//  background-color:green;
//  -webkit-border-radius: 2em;
//  -moz-border-radius: 2em;
//  border-radius:2em;
// }
</style>
