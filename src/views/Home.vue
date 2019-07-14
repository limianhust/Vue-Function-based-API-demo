<template>
  <div style="margin-top: 20px;">
    <span>count is <span class="emphasis">{{ count }}</span></span>
    <span>plusOne is <span class="emphasis">{{ plusOne }}</span></span>
    <el-button @click="increment">count++</el-button>
    <div style="margin-top: 20px;">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[10, 20, 30, 40]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      ></el-pagination>
      <div style="margin-top: 20px;">
        <el-button @click="getDataList">取得数据</el-button>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import Vue from "vue";
import { value, computed, watch, onMounted } from "vue-function-api";
import usePagination from "./pagination.js";
import useCout from "./cout.js";
export default {
  setup() {
    // 请求数据
    const getDataList = () => {
      // setTotal(parseInt(Math.random() * 100));
      setTotal(68);
    };

    // pagination
    const {
      currentPage,
      pageSize,
      total,
      handleCurrentChange,
      handleSizeChange,
      setTotal
    } = usePagination(getDataList);

    const { count, plusOne, increment } = useCout();
    // expose bindings on render context
    return {
      count,
      plusOne,
      increment,
      currentPage,
      pageSize,
      total,
      handleCurrentChange,
      handleSizeChange,
      setTotal,
      getDataList
    };
  }
};
</script>

<style lang="scss">
.emphasis {
  margin: 0 5px;
  color: blue;

}
</style>
